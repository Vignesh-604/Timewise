import connectDB from '@/lib/db';
import Visit from '@/models/Visit';

export async function POST(req) {
    try {
        await connectDB();

        let data;
        try {
            data = await req.json();
        } catch (e) {
            return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
        }

        const { sessionId, page, referrer, utm_source, utm_medium, utm_campaign, utm_content, utm_term } = data;

        if (!sessionId) {
            return Response.json({ success: false, error: 'Session ID required' }, { status: 400 });
        }

        // Try to find existing session
        let visit = await Visit.findOne({ sessionId });

        if (visit) {
            // Update existing session: push new page and update lastActiveAt
            // We check if the last page was the same to avoid duplicate rapid fires if needed,
            // but usually we want to track all meaningful navigation.
            await Visit.updateOne(
                { sessionId },
                {
                    $push: {
                        pages: {
                            path: page,
                            referrer: referrer || '',
                            visitedAt: new Date()
                        }
                    },
                    $set: {
                        lastActiveAt: new Date(),
                        // Update basic info if it was missing (e.g. if started on a page without user agent tracking working initially?? unlikely but safe)
                        // Also link user if they logged in during session
                        ...(data.userId ? { userId: data.userId } : {})
                    }
                }
            );
        } else {
            // New Session - Create new document

            // Detect device type
            const userAgent = data.userAgent || '';
            let device = 'unknown';
            if (/mobile/i.test(userAgent)) {
                device = 'mobile';
            } else if (/tablet|ipad/i.test(userAgent)) {
                device = 'tablet';
            } else if (/windows|macintosh|linux/i.test(userAgent)) {
                device = 'desktop';
            }

            visit = await Visit.create({
                sessionId,
                utm_source: utm_source || 'direct',
                utm_medium: utm_medium || 'none',
                utm_campaign: utm_campaign || 'none',
                utm_content: utm_content || '',
                utm_term: utm_term || '',
                userId: data.userId || null,
                userAgent,
                device,
                pages: [{
                    path: page || '/',
                    referrer: referrer || '',
                    visitedAt: new Date()
                }],
                startedAt: new Date(),
                lastActiveAt: new Date()
            });
        }

        return Response.json({ success: true, visitId: visit._id });
    } catch (error) {
        console.error('Error tracking visit:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}

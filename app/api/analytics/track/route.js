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
            // Update existing session
            let updateQuery = {
                $set: {
                    lastActiveAt: new Date(),
                    ...(data.userId ? { userId: data.userId } : {})
                }
            };

            // ID-1: Handle Events vs Page Views
            if (data.event) {
                updateQuery.$push = {
                    events: {
                        name: data.event.name,
                        data: data.event.data || {},
                        occurredAt: new Date()
                    }
                };
            } else {
                // Check if page already visited in this session
                const pageExists = visit.pages && visit.pages.some(p => p.path === page);

                if (!pageExists) {
                    updateQuery.$push = {
                        pages: {
                            path: page,
                            referrer: referrer || '',
                            visitedAt: new Date()
                        }
                    };
                }
            }

            await Visit.updateOne({ sessionId }, updateQuery);
        } else {
            // New Session - Create new document
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
                host: data.host || '',
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

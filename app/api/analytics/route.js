import connectDB from '@/lib/db';
import Visit from '@/models/Visit';

export async function GET(req) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const period = searchParams.get('period') || '7d';

        // Calculate date filter based on Session Start Time
        let dateFilter = {};
        const now = new Date();
        if (period === '7d') {
            dateFilter = { startedAt: { $gte: new Date(now - 7 * 24 * 60 * 60 * 1000) } };
        } else if (period === '30d') {
            dateFilter = { startedAt: { $gte: new Date(now - 30 * 24 * 60 * 60 * 1000) } };
        }

        // 1. Total Sessions (Unique Visits)
        const totalSessions = await Visit.countDocuments(dateFilter);

        // 2. Total Page Views (Sum of pages array lengths)
        const pageViewStats = await Visit.aggregate([
            { $match: dateFilter },
            { $project: { pageCount: { $size: "$pages" } } },
            { $group: { _id: null, total: { $sum: "$pageCount" } } }
        ]);
        const totalPageViews = pageViewStats.length > 0 ? pageViewStats[0].total : 0;

        // 3. Traffic Sources (Based on Session)
        const bySource = await Visit.aggregate([
            { $match: dateFilter },
            { $group: { _id: '$utm_source', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 15 }
        ]);

        // 4. Campaigns
        const byCampaign = await Visit.aggregate([
            { $match: dateFilter },
            { $group: { _id: '$utm_campaign', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 15 }
        ]);

        // 5. Devices
        const byDevice = await Visit.aggregate([
            { $match: dateFilter },
            { $group: { _id: '$device', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        // 6. Top Pages (Need to unwind pages array)
        const byPage = await Visit.aggregate([
            { $match: dateFilter },
            { $unwind: "$pages" },
            { $group: { _id: "$pages.path", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 15 }
        ]);

        // 7. Daily Sessions Trend
        const dailySessions = await Visit.aggregate([
            { $match: dateFilter },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$startedAt" } },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        // Fill in missing dates with 0
        const daysToFill = period === '30d' ? 30 : 7;
        const filledDailySessions = [];
        const sessionMap = new Map(dailySessions.map(d => [d._id, d.count]));

        for (let i = daysToFill - 1; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            filledDailySessions.push({
                date: dateStr,
                count: sessionMap.get(dateStr) || 0
            });
        }

        // 8. Recent Sessions
        const recentVisits = await Visit.find(dateFilter)
            .sort({ lastActiveAt: -1 })
            .limit(20)
            .select('utm_source utm_medium utm_campaign pages device startedAt lastActiveAt')
            .lean();

        // Format recent visits to show landing page and path count
        const formattedRecentVisits = recentVisits.map(v => ({
            ...v,
            visitedAt: v.startedAt,
            page: v.pages[0]?.path || 'unknown', // Landing page
            pagesViewed: v.pages.length,
            path: v.pages.map(p => p.path)
        }));

        return Response.json({
            success: true,
            data: {
                totalVisits: totalSessions, // Renaming for frontend compatibility, but means Sessions
                totalPageViews,
                bySource: bySource.map(s => ({ source: s._id, count: s.count })),
                byCampaign: byCampaign.map(c => ({ campaign: c._id, count: c.count })),
                byDevice: byDevice.map(d => ({ device: d._id, count: d.count })),
                byPage: byPage.map(p => ({ page: p._id, count: p.count })),
                recentVisits: formattedRecentVisits,
                dailySessions: filledDailySessions,
            }
        });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}

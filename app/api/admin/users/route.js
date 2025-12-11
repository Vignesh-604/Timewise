import connectDB from '@/lib/db';
import User from '@/models/User';

export async function GET(req) {
    try {
        await connectDB();

        // 1. Get all users sorted by latest
        const users = await User.find().sort({ createdAt: -1 }).select('-password').lean();

        // 2. Aggregate Daily Signups
        const { searchParams } = new URL(req.url);
        const period = searchParams.get('period') || '30d';

        const now = new Date();
        const daysToSubtract = period === '7d' ? 7 : 30;
        const startDate = new Date(now - daysToSubtract * 24 * 60 * 60 * 1000);

        const dailySignups = await User.aggregate([
            { $match: { createdAt: { $gte: startDate } } },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        // Fill in missing dates
        const filledDailySignups = [];
        const signupMap = new Map(dailySignups.map(d => [d._id, d.count]));

        for (let i = daysToSubtract - 1; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            filledDailySignups.push({
                date: dateStr,
                count: signupMap.get(dateStr) || 0
            });
        }

        return Response.json({
            success: true,
            data: {
                users,
                dailySignups: filledDailySignups,
                totalUsers: users.length
            }
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}

import connectDB from '@/lib/db';
import Review from '@/models/Review';
import { getWatchReviews } from '@/data/reviews';

export async function GET(req) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const watchId = searchParams.get('watchId');

        if (!watchId) {
            return Response.json({ error: 'Watch ID required' }, { status: 400 });
        }

        const id = parseInt(watchId);

        // Fetch from DB
        const dbReviews = await Review.find({ watchId: id }).sort({ createdAt: -1 });

        // Fetch from static file (legacy data)
        const staticReviews = getWatchReviews(id);

        // Combine them (DB first)
        // Note: staticReviews items have 'id' (number), dbReviews have '_id' (ObjectId).
        const allReviews = [...dbReviews, ...staticReviews];

        return Response.json({ success: true, reviews: allReviews });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connectDB();
        const data = await req.json();

        const { watchId, userName, rating, headline, text, date } = data;

        if (!watchId || !userName || !rating || !headline || !text) {
            return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const review = await Review.create({
            watchId: parseInt(watchId),
            userName,
            rating,
            headline,
            text,
            date: date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }), // DD/MM/YY
            verified: true // Assuming logged in users are verified for now, or we can check purchase history later
        });

        return Response.json({ success: true, review });
    } catch (error) {
        console.error('Error adding review:', error);
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}

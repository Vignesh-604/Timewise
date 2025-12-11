import connectDB from '@/lib/db';
import Order from '@/models/Order';

export async function GET() {
    try {
        await connectDB();

        // Aggregate sales from Orders collection
        const salesData = await Order.aggregate([
            // 1. Unwind items array
            { $unwind: '$items' },
            // 2. Group by Product ID
            {
                $group: {
                    _id: '$items.id',
                    name: { $first: '$items.name' },
                    price: { $first: '$items.price' },
                    totalSold: { $sum: '$items.quantity' },
                    revenue: {
                        $sum: {
                            $multiply: ['$items.price', '$items.quantity']
                        }
                    }
                }
            },
            // 3. Sort by Total Sold Descending
            { $sort: { totalSold: -1 } }
        ]);

        return Response.json({ success: true, sales: salesData });
    } catch (error) {
        console.error('Error fetching sales analytics:', error);
        return Response.json({ success: false, error: 'Failed to fetch sales data' }, { status: 500 });
    }
}

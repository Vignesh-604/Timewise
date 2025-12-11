import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Order from '@/models/Order';
import { authMiddleware } from '@/middleware/authMiddleware';

// GET: List orders for the authenticated user
export async function GET(request) {
    try {
        const decoded = await authMiddleware(request);
        if (decoded instanceof NextResponse) return decoded;

        await connectDB();

        const orders = await Order.find({ userId: decoded.userId }).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, orders }, { status: 200 });
    } catch (error) {
        console.error('Fetch orders error:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}

// POST: Create a new order
export async function POST(request) {
    try {
        const decoded = await authMiddleware(request);
        if (decoded instanceof NextResponse) return decoded;

        await connectDB();

        const data = await request.json();
        const { items, totalAmount } = data;

        if (!items || items.length === 0) {
            return NextResponse.json({ success: false, message: 'No items in order' }, { status: 400 });
        }

        const order = await Order.create({
            userId: decoded.userId,
            items,
            totalAmount,
            status: 'completed' // Since it's a pre-order/simulation, we mark as completed or pending
        });

        return NextResponse.json({ success: true, order }, { status: 201 });
    } catch (error) {
        console.error('Create order error:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}

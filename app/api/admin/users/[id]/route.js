import connectDB from '@/lib/db';
import User from '@/models/User';
import Order from '@/models/Order';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    try {
        await connectDB();
        const { id } = await params;

        const user = await User.findById(id).select('-password');
        if (!user) {
            return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
        }

        const orders = await Order.find({ userId: id }).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, user, orders });
    } catch (error) {
        console.error('Error fetching user details:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

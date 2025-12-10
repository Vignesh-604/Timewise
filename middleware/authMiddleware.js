import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function authMiddleware(request) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.json(
            { success: false, message: 'Authentication required' },
            { status: 401 }
        );
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return NextResponse.json(
            { success: false, message: 'Invalid or expired token' },
            { status: 401 }
        );
    }

    return decoded;
}

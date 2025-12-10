import mongoose from 'mongoose';

// Load environment variables explicitly
if (typeof window === 'undefined') {
    // Only load dotenv on server-side
    try {
        // require('dotenv').config({ path: '.env.local' });
        require('dotenv').config({ path: '.env' });
    } catch (e) {
        // dotenv might not be needed if Next.js handles it
    }
}

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    throw new Error('Please define the MONGODB_URL environment variable inside .env.local');
}

// Validate MongoDB URL format
if (!MONGODB_URL.startsWith('mongodb://') && !MONGODB_URL.startsWith('mongodb+srv://')) {
    throw new Error('MONGODB_URL must start with "mongodb://" or "mongodb+srv://". Please check your .env.local file.');
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error('MongoDB connection error:', e.message);
        throw new Error(`Failed to connect to MongoDB: ${e.message}. Please check your MONGODB_URL in .env.local`);
    }

    return cached.conn;
}

export default connectDB;

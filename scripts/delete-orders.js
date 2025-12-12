const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

// Load env vars
// Try looking in root dir
const rootDir = path.join(__dirname, '..');
dotenv.config({ path: path.join(rootDir, '.env.local') });
if (!process.env.MONGODB_URL) {
    dotenv.config({ path: path.join(rootDir, '.env') });
}

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    console.error('Error: MONGODB_URL is not defined in .env or .env.local');
    process.exit(1);
}

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        id: String,
        name: String,
        price: Number,
        quantity: Number,
        image: String
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'completed', 'cancelled']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

async function run() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to ' + MONGODB_URL.split('@')[1]); // Log safe part of URL

        console.log('Deleting all orders...');
        const res = await Order.deleteMany({});
        console.log(`Successfully deleted ${res.deletedCount} orders.`);

        await mongoose.disconnect();
        console.log('Disconnected.');
        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

run();

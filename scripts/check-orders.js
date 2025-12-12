const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

// Load env vars
const rootDir = path.join(__dirname, '..');
dotenv.config({ path: path.join(rootDir, '.env.local') });
if (!process.env.MONGODB_URL) {
    dotenv.config({ path: path.join(rootDir, '.env') });
}

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    console.error('Error: MONGODB_URL is not defined');
    process.exit(1);
}

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // ... other fields irrelevant for counting
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

async function run() {
    try {
        await mongoose.connect(MONGODB_URL);
        const count = await Order.countDocuments({});
        console.log(`Current order count: ${count}`);
        await mongoose.disconnect();
        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

run();

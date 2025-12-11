import mongoose from 'mongoose';

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
        default: 'pending', // pending, completed, cancelled
        enum: ['pending', 'completed', 'cancelled']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);

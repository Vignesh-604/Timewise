import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    watchId: {
        type: Number,
        required: true,
        index: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false // Allow anonymous/guest reviews if needed, or enforce. User logged in flow exists, so maybe true.
    },
    userName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    headline: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String, // Storing as DD/MM/YY to match existing frontend format easily
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);

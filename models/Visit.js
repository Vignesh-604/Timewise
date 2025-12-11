import mongoose from 'mongoose';

const VisitSchema = new mongoose.Schema({
    // UTM Parameters (set on the first visit of the session/landing)
    utm_source: {
        type: String,
        default: 'direct',
        index: true,
    },
    utm_medium: {
        type: String,
        default: 'none',
    },
    utm_campaign: {
        type: String,
        default: 'none',
    },
    utm_content: {
        type: String,
        default: '',
    },
    utm_term: {
        type: String,
        default: '',
    },

    // Session Info
    sessionId: {
        type: String,
        required: true,
        unique: true, // One document per session
        index: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },

    // Visitor info
    userAgent: {
        type: String,
        default: '',
    },
    device: {
        type: String,
        enum: ['desktop', 'mobile', 'tablet', 'unknown'],
        default: 'unknown',
    },

    // Navigation History
    pages: [{
        path: { type: String, required: true },
        ids: { type: String }, // optional ID specific to the page e.g. product id
        visitedAt: { type: Date, default: Date.now },
        referrer: { type: String, default: '' }
    }],

    // Meta
    startedAt: {
        type: Date,
        default: Date.now,
        index: true,
    },
    lastActiveAt: {
        type: Date,
        default: Date.now,
    }
});

// Indexes for analytics
VisitSchema.index({ utm_source: 1, startedAt: -1 });
VisitSchema.index({ utm_campaign: 1, startedAt: -1 });
VisitSchema.index({ "pages.path": 1 });

export default mongoose.models.Visit || mongoose.model('Visit', VisitSchema);

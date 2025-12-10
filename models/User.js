import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password must be at least 6 characters'],
    },
    age: {
        type: Number,
        required: [true, 'Please provide your age'],
        min: [18, 'Age must be at least 18'],
        max: [24, 'Age must be at most 24'],
    },
    city: {
        type: String,
        required: [true, 'Please provide your city'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide your phone number'],
        match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

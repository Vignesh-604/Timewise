
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env vars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    console.error('Please define the MONGODB_URL environment variable inside .env');
    process.exit(1);
}

// Minimal Schema definition to avoid importing dependencies that might fail in script mode
// Or we can try to import the model. Let's try to define minimal schema for deletion to be safe.
// We just need to access the 'visits' collection (mongoose by default lowercases and pluralizes 'Visit' -> 'visits')
const VisitSchema = new mongoose.Schema({}, { strict: false });
const Visit = mongoose.models.Visit || mongoose.model('Visit', VisitSchema);

// If there are other Session related collections, we check them.
// The user mentioned "sessions". In Visit model, "sessionId" is a field.
// The collection name is likely "visits".

async function clearSessions() {
    try {
        console.log('Connecting to database...');
        await mongoose.connect(MONGODB_URL);
        console.log('Connected.');

        console.log('Deleting all visits (sessions)...');
        const result = await Visit.deleteMany({});

        console.log(`Deleted ${result.deletedCount} visits/sessions.`);

        // Also check if there is a 'sessions' collection explicitly?
        // Usually NextAuth or similar usage might create one, but here we see custom implementation using Visit model.
        // Let's assume Visit is the one.

    } catch (error) {
        console.error('Error clearing sessions:', error);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected.');
        process.exit(0);
    }
}

clearSessions();

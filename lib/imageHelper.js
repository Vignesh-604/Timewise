// Image mapping for watches - maps watch IDs to local images from public folder
const watchImageMap = {};

// Stock image fallbacks
const stockImages = [
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400',
    'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400',
    'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400',
    'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400',
    'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400',
    'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400',
    'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400',
    'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=400',
    'https://images.unsplash.com/photo-1506193095-80c77088e8a7?w=400',
    'https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=400',
    'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400',
];

// Get image for watch with fallback
export const getWatchImage = (watchId, originalImage = null) => {
    // First try local image from public folder
    if (watchImageMap[watchId]) {
        return watchImageMap[watchId];
    }

    // If original image is a local path, use it
    if (originalImage && originalImage.startsWith('/')) {
        return originalImage;
    }

    // Use original image if it's a valid URL
    if (originalImage && originalImage.startsWith('http')) {
        return originalImage;
    }

    // Fallback to stock image based on watch ID
    const stockIndex = (watchId - 1) % stockImages.length;
    return stockImages[stockIndex];
};

// Get multiple images for a watch (for gallery)
export const getWatchImages = (watchId, originalImage = null) => {
    const primaryImage = getWatchImage(watchId, originalImage);
    // Return array of images - primary + some variations
    return [
        primaryImage,
        primaryImage, // Can be replaced with different angles later
        primaryImage, // Can be replaced with different angles later
    ];
};


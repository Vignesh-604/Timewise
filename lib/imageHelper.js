// Image mapping for watches - maps watch IDs to local images from public folder
const watchImageMap = {
    1: '/luxary-black-mens.jpeg',
    2: '/luxary-pink-womens.jpeg',
    3: '/classic-leather.jpeg',
    4: '/luxary-gold-mens.jpeg',
    5: '/classic-leather-2.jpeg',
    6: '/digital-leather.jpeg',
    7: '/luxary-black-mens.jpeg',
    8: '/classic-leather.jpeg',
    9: '/classic-metal-men.png',
    10: '/digital-leather.jpeg',
    11: '/luxary-gold-mens.jpeg',
    12: '/classic-leather-2.jpeg',
    13: '/luxary-pink-womens.jpeg',
    14: '/classic-metal-men.png',
    15: '/digital-leather.jpeg',
    16: '/luxary-black-mens.jpeg',
    17: '/luxary-gold-mens.jpeg',
    18: '/classic-leather.jpeg',
    19: '/luxary-pink-womens.jpeg',
    20: '/classic-metal-men.png',
    21: '/digital-leather.jpeg',
    22: '/luxary-black-mens.jpeg',
    23: '/classic-leather-2.jpeg',
    24: '/luxary-gold-mens.jpeg',
    25: '/classic-leather.jpeg',
    26: '/classic-metal-men.png',
    27: '/luxary-gold-mens.jpeg',
    28: '/luxary-pink-womens.jpeg',
    29: '/luxary-black-mens.jpeg',
    30: '/luxary-gold-mens.jpeg',
    31: '/luxary-black-mens.jpeg',
    32: '/luxary-pink-womens.jpeg',
    33: '/luxary-gold-mens.jpeg',
    34: '/classic-leather.jpeg',
    35: '/classic-leather-2.jpeg',
    36: '/digital-leather.jpeg',
    37: '/luxary-pink-womens.jpeg',
    38: '/classic-metal-men.png',
    39: '/luxary-black-mens.jpeg',
    40: '/digital-leather.jpeg',
    41: '/luxary-pink-womens.jpeg',
    42: '/kids-boys.jpeg',
    43: '/kids-boys.jpeg',
    44: '/classic-metal-men.png',
    45: '/luxary-gold-mens.jpeg',
    46: '/classic-metal-men.png',
    47: '/luxary-pink-womens.jpeg',
    48: '/classic-leather.jpeg',
    49: '/luxary-gold-mens.jpeg',
    50: '/classic-metal-men.png',
    51: '/luxary-pink-womens.jpeg',
    52: '/luxary-black-mens.jpeg',
    53: '/luxary-pink-womens.jpeg',
    54: '/luxary-gold-mens.jpeg',
    55: '/luxary-pink-womens.jpeg',
    56: '/luxary-black-mens.jpeg',
    57: '/luxary-pink-womens.jpeg',
    58: '/classic-leather.jpeg',
    59: '/luxary-pink-womens.jpeg',
    60: '/luxary-black-mens.jpeg',
};

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


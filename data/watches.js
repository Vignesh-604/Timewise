
// Watch Categories
export const categories = [
    { id: 'mens', name: 'Mens' },
    { id: 'womens', name: 'Womens' },
    { id: 'kids', name: 'Kids' },
    { id: 'classic', name: 'Classic' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'leather', name: 'Leather' },
    { id: 'sports', name: 'Sports' },
    { id: 'metal', name: 'Metal' },
];

export const allWatches = [
    // --- MENS WATCHES ---

    // Mens Luxury
    {
        id: 1,
        name: 'Royal Gold Master',
        description: 'Premium gold-plated luxury watch for the distinguished gentleman',
        price: 6318,
        originalPrice: 7998,
        discount: 21,
        image: '/luxary-gold-mens.jpeg',
        category: 'luxury',
        gender: 'mens',
        brand: 'Chronos',
        rating: 4.9,
        reviews: 245,
        isBestseller: true
    },
    {
        id: 2,
        name: 'Onyx Black Elite',
        description: 'Sophisticated black dial luxury watch with gold accents',
        price: 5601,
        originalPrice: 6748,
        discount: 17,
        image: '/luxary-black-mens.jpeg',
        category: 'luxury',
        gender: 'mens',
        brand: 'Chronos',
        rating: 4.8,
        reviews: 189
    },
    {
        id: 3,
        name: 'Silver Sovereign',
        description: 'Classic silver tones meet modern luxury styling',
        price: 5523,
        originalPrice: 6498,
        discount: 15,
        image: '/mens-luxary-silver.jpg',
        category: 'luxury',
        gender: 'mens',
        brand: 'Titanium',
        rating: 4.7,
        reviews: 156
    },
    {
        id: 4,
        name: 'Rose Gold Heritage',
        description: 'Timeless rose gold finish for a vintage luxury feel',
        price: 4350,
        originalPrice: 7250,
        discount: 40,
        image: '/Men Rolex rose gold.jpg',
        category: 'luxury',
        gender: 'mens',
        brand: 'Heritage',
        rating: 4.8,
        reviews: 112
    },
    {
        id: 5,
        name: 'Midnight Black Premium',
        description: 'Deep black dial with diamond indices',
        price: 4249,
        originalPrice: 8498,
        discount: 50,
        image: '/mens-luxary-black.jpg',
        category: 'luxury',
        gender: 'mens',
        brand: 'Chronos',
        rating: 4.9,
        reviews: 98
    },

    // Mens Classic / Casual
    {
        id: 6,
        name: 'Blue Horizon Casual',
        description: 'Versatile blue dial watch for everyday elegance',
        price: 2348,
        originalPrice: 2498,
        discount: 6,
        image: '/mens-casual-blue.jpg',
        category: 'classic',
        gender: 'mens',
        brand: 'Urban',
        rating: 4.5,
        reviews: 320,
        isNew: true
    },
    {
        id: 7,
        name: 'Classic Steel Blue',
        description: 'Essential stainless steel watch with a deep blue dial',
        price: 1313,
        originalPrice: 1750,
        discount: 25,
        image: '/Blue Dial.jpg',
        category: 'classic',
        gender: 'mens',
        brand: 'Urban',
        rating: 4.4,
        reviews: 210
    },
    {
        id: 8,
        name: 'Minimalist Blue',
        description: 'Clean lines and a minimalist blue face',
        price: 1273,
        originalPrice: 1498,
        discount: 15,
        image: '/Blue dial (2).jpg',
        category: 'classic',
        gender: 'mens',
        brand: 'Minimal',
        rating: 4.3,
        reviews: 150
    },

    // Mens Leather
    {
        id: 9,
        name: 'Vintage Tan Leather',
        description: 'Hand-stitched tan leather strap with a classic white dial',
        price: 1303,
        originalPrice: 1448,
        discount: 10,
        image: '/classic-leather.jpeg',
        category: 'leather',
        gender: 'mens',
        brand: 'Heritage',
        rating: 4.6,
        reviews: 412,
        isBestseller: true
    },
    {
        id: 10,
        name: 'Oxford Brown Leather',
        description: 'Rich brown leather strap perfect for formal occasions',
        price: 1121,
        originalPrice: 1648,
        discount: 32,
        image: '/classic-leather-2.jpeg',
        category: 'leather',
        gender: 'mens',
        brand: 'Heritage',
        rating: 4.7,
        reviews: 189
    },
    {
        id: 11,
        name: 'Noir Leather Edition',
        description: 'Sleek black dial with matching black leather strap',
        price: 1608,
        originalPrice: 1748,
        discount: 8,
        image: '/Black dial leather strap.jpg',
        category: 'leather',
        gender: 'mens',
        brand: 'Urban',
        rating: 4.5,
        reviews: 231
    },
    {
        id: 12,
        name: 'Daily Brown',
        description: 'Comfortable brown strap for daily wear',
        price: 719,
        originalPrice: 998,
        discount: 28,
        image: '/Brown strap Daily use.jpg',
        category: 'leather',
        gender: 'mens',
        brand: 'Everyday',
        rating: 4.2,
        reviews: 560
    },
    {
        id: 13,
        name: 'Gradient Brown Special',
        description: 'Unique gradient dial with premium leather',
        price: 1838,
        originalPrice: 2298,
        discount: 20,
        image: '/Gradient brown dial.jpg',
        category: 'leather',
        gender: 'mens',
        brand: 'Artisan',
        rating: 4.8,
        reviews: 87
    },
    {
        id: 14,
        name: 'Executive Square Leather',
        description: 'Distinguished square dial with textured leather',
        price: 1859,
        originalPrice: 2998,
        discount: 38,
        image: '/Square dial leather strap.jpg',
        category: 'leather',
        gender: 'mens',
        brand: 'Executive',
        rating: 4.6,
        reviews: 102
    },

    // Mens Metal
    {
        id: 15,
        name: 'Titan Silver',
        description: 'Robust all-silver stainless steel construction',
        price: 2484,
        originalPrice: 3498,
        discount: 29,
        image: '/Pure Stainless steel.jpg',
        category: 'metal',
        gender: 'mens',
        brand: 'Titanium',
        rating: 4.7,
        reviews: 340
    },
    {
        id: 16,
        name: 'Rose Gold Accent',
        description: 'Silver body with elegant rose gold touches',
        price: 2324,
        originalPrice: 3748,
        discount: 38,
        image: '/Rose gold Men.jpg',
        category: 'metal',
        gender: 'mens',
        brand: 'Titanium',
        rating: 4.8,
        reviews: 120
    },
    {
        id: 17,
        name: 'Emerald Green Metal',
        description: 'Striking green dial on a classic metal bracelet',
        price: 2310,
        originalPrice: 2750,
        discount: 16,
        image: '/Green dial.jpg',
        category: 'metal',
        gender: 'mens',
        brand: 'Vibrant',
        rating: 4.5,
        reviews: 145
    },
    {
        id: 18,
        name: 'Square Metal Pro',
        description: 'Modern square silhouette in brushed metal',
        price: 2759,
        originalPrice: 3100,
        discount: 11,
        image: '/mens-square-metal.jpg',
        category: 'metal',
        gender: 'mens',
        brand: 'Modern',
        rating: 4.4,
        reviews: 98
    },
    {
        id: 19,
        name: 'Silver Streak',
        description: 'Streamlined silver design for the modern man',
        price: 2175,
        originalPrice: 2900,
        discount: 25,
        image: '/metal-mens-silver.jpg',
        category: 'metal',
        gender: 'mens',
        brand: 'Streamline',
        rating: 4.6,
        reviews: 112,
        isNew: true
    },
    {
        id: 20,
        name: 'Gunmetal Black',
        description: 'Stealthy gunmetal finish',
        price: 2439,
        originalPrice: 3998,
        discount: 39,
        image: '/metal-black-men.png',
        category: 'metal',
        gender: 'mens',
        brand: 'Titanium',
        rating: 4.8,
        reviews: 201
    },

    // Mens Sports
    {
        id: 21,
        name: 'Diver Pro',
        description: 'Professional diver watch with rotating bezel',
        price: 3868,
        originalPrice: 4498,
        discount: 14,
        image: '/Rotating bezel.jpg',
        category: 'metal',
        gender: 'mens',
        brand: 'Active',
        rating: 4.7,
        reviews: 289
    },
    {
        id: 22,
        name: 'Chrono Digital Leather',
        description: 'Hybrid digital-analog with a rugged leather strap',
        price: 1951,
        originalPrice: 2748,
        discount: 29,
        image: '/digital-leather.jpeg',
        category: 'sports',
        gender: 'mens',
        brand: 'Active',
        rating: 4.5,
        reviews: 176
    },

    // --- WOMENS WATCHES ---

    // Womens Luxury
    {
        id: 23,
        name: 'Rose Gold Empress',
        description: 'Stunning rose gold timepiece with crystal embellishments',
        price: 4749,
        originalPrice: 9498,
        discount: 50,
        image: '/womens-luxary-rose.jpg',
        category: 'luxury',
        gender: 'womens',
        brand: 'Aura',
        rating: 4.9,
        reviews: 310,
        isBestseller: true
    },
    {
        id: 24,
        name: 'Golden Goddess',
        description: 'Classic gold luxury watch for her',
        price: 4375,
        originalPrice: 8750,
        discount: 50,
        image: '/womens-luxary-gold.jpg',
        category: 'luxury',
        gender: 'womens',
        brand: 'Aura',
        rating: 4.8,
        reviews: 198
    },
    {
        id: 25,
        name: 'Platinum Pink',
        description: 'Soft pink dial framed in platinum elegance',
        price: 4249,
        originalPrice: 8498,
        discount: 50,
        image: '/luxary-pink-womens.jpeg',
        category: 'luxury',
        gender: 'womens',
        brand: 'Aura',
        rating: 4.9,
        reviews: 145
    },
    {
        id: 26,
        name: 'Silver Elegance',
        description: 'Refined silver luxury for evening wear',
        price: 7438,
        originalPrice: 7748,
        discount: 4,
        image: '/womens-luxary-silver.jpg',
        category: 'luxury',
        gender: 'womens',
        brand: 'Aura',
        rating: 4.7,
        reviews: 167
    },
    {
        id: 27,
        name: 'Metal & Luxury Fusion',
        description: 'High-end metal finish with luxury detailing',
        price: 4874,
        originalPrice: 7498,
        discount: 35,
        image: '/women-metal-luxary.jpg',
        category: 'luxury',
        gender: 'womens',
        brand: 'Aura',
        rating: 4.8,
        reviews: 112,
        isNew: true
    },
    {
        id: 28,
        name: 'Pink Sapphire',
        description: 'Luxury watch with pink sapphire accents',
        price: 4875,
        originalPrice: 9750,
        discount: 50,
        image: '/womens-luxary-pink.jpg',
        category: 'luxury',
        gender: 'womens',
        brand: 'Aura',
        rating: 4.9,
        reviews: 89
    },

    // Womens Classic / Casual
    {
        id: 29,
        name: 'Casual Chic Rose',
        description: 'Relaxed rose tones for everyday style',
        price: 1918,
        originalPrice: 1998,
        discount: 4,
        image: '/womens-rose-casual.jpg',
        category: 'classic',
        gender: 'womens',
        brand: 'Chic',
        rating: 4.6,
        reviews: 423
    },
    {
        id: 30,
        name: 'Everyday Silver',
        description: 'Simple and elegant silver watch for women',
        price: 1713,
        originalPrice: 1748,
        discount: 2,
        image: '/women-casual.jpg',
        category: 'classic',
        gender: 'womens',
        brand: 'Chic',
        rating: 4.5,
        reviews: 210
    },
    {
        id: 31,
        name: 'Blue Dial Classic',
        description: 'Deep blue dial ideal for office or casual wear',
        price: 1367,
        originalPrice: 1898,
        discount: 28,
        image: '/Wonen blue dial.jpg',
        category: 'classic',
        gender: 'womens',
        brand: 'Chic',
        rating: 4.4,
        reviews: 178
    },
    {
        id: 32,
        name: 'College Daily',
        description: 'Durable and trendy, perfect for students',
        price: 848,
        originalPrice: 998,
        discount: 15,
        image: '/Daily college wear.jpg',
        category: 'classic',
        gender: 'womens',
        brand: 'Trend',
        rating: 4.3,
        reviews: 560
    },
    {
        id: 33,
        name: 'Pink Elegant',
        description: 'Soft pink elegance for any occasion',
        price: 1659,
        originalPrice: 2100,
        discount: 21,
        image: '/Elegant pink.jpg',
        category: 'classic',
        gender: 'womens',
        brand: 'Chic',
        rating: 4.7,
        reviews: 134
    },

    // Womens Leather
    {
        id: 34,
        name: 'Minimalist Leather',
        description: 'Thin strap leather watch for a subtle look',
        price: 761,
        originalPrice: 1248,
        discount: 39,
        image: '/Simple leather daily wwear.jpg',
        category: 'leather',
        gender: 'womens',
        brand: 'Trend',
        rating: 4.5,
        reviews: 321
    },

    // Womens Metal
    {
        id: 35,
        name: 'Two-Tone Beauty',
        description: 'Combination of gold and silver links',
        price: 2959,
        originalPrice: 3998,
        discount: 26,
        image: '/Combination Gold and Silver.jpg',
        category: 'metal',
        gender: 'womens',
        brand: 'Aura',
        rating: 4.7,
        reviews: 245
    },
    {
        id: 36,
        name: 'Bracelet Watch',
        description: 'Jewelry meets timekeeping in this unique design',
        price: 3598,
        originalPrice: 4498,
        discount: 20,
        image: '/Bracelet cum watch.jpg',
        category: 'metal',
        gender: 'womens',
        brand: 'Aura',
        rating: 4.8,
        reviews: 167
    },
    {
        id: 37,
        name: 'Pink Dial Metal',
        description: 'Metal bracelet with a charming pink face',
        price: 3088,
        originalPrice: 3250,
        discount: 5,
        image: '/pink dial.jpg',
        category: 'metal',
        gender: 'womens',
        brand: 'Chic',
        rating: 4.6,
        reviews: 198
    },
    {
        id: 38,
        name: 'Sky Blue Steel',
        description: 'Cool blue dial on stainless steel',
        price: 2516,
        originalPrice: 3400,
        discount: 26,
        image: '/Sky Blue.jpg',
        category: 'metal',
        gender: 'womens',
        brand: 'Chic',
        rating: 4.5,
        reviews: 112
    },
    {
        id: 39,
        name: 'Platinum Touch',
        description: 'Silver with a hint of gold luxury',
        price: 4275,
        originalPrice: 4750,
        discount: 10,
        image: '/silver with golden touch.jpg',
        category: 'metal',
        gender: 'womens',
        brand: 'Aura',
        rating: 4.8,
        reviews: 143
    },

    // --- KIDS WATCHES ---

    {
        id: 40,
        name: 'PlayDay Blue',
        description: 'Fun blue watch for active kids',
        price: 412,
        originalPrice: 448,
        discount: 8,
        image: '/Blue playday watch.jpg',
        category: 'kids',
        gender: 'kids',
        brand: 'Zoop',
        rating: 4.7,
        reviews: 120
    },
    {
        id: 41,
        name: 'Princess Pink',
        description: 'Adorable pink watch for little ones',
        price: 388,
        originalPrice: 498,
        discount: 22,
        image: '/kids-girls-pink.jpg',
        category: 'kids',
        gender: 'kids',
        brand: 'Zoop',
        rating: 4.8,
        reviews: 210,
        isBestseller: true
    },
    {
        id: 42,
        name: 'Pokemon Trainer',
        description: 'Catch them all with this special edition',
        price: 666,
        originalPrice: 748,
        discount: 11,
        image: '/Pokemon edition.jpg',
        category: 'kids',
        gender: 'kids',
        brand: 'Zoop',
        rating: 4.9,
        reviews: 560,
        isNew: true
    },
    {
        id: 43,
        name: 'Sunny Yellow',
        description: 'Bright yellow watch to brighten the day',
        price: 291,
        originalPrice: 398,
        discount: 27,
        image: '/Kids-yellow.jpg',
        category: 'kids',
        gender: 'kids',
        brand: 'Zoop',
        rating: 4.6,
        reviews: 89
    },
    {
        id: 44,
        name: 'Hello Kitty Purple',
        description: 'Cute purple kitty themed watch',
        price: 570,
        originalPrice: 648,
        discount: 12,
        image: '/Puple kitty.jpg',
        category: 'kids',
        gender: 'kids',
        brand: 'Zoop',
        rating: 4.8,
        reviews: 320
    },
    {
        id: 45,
        name: 'Sporty Boys',
        description: 'Rugged design for adventurous boys',
        price: 352,
        originalPrice: 550,
        discount: 36,
        image: '/kids-boys.jpg',
        category: 'kids',
        gender: 'kids',
        brand: 'SF',
        rating: 4.5,
        reviews: 145
    },
    {
        id: 46,
        name: 'Little Green',
        description: 'Fresh green color for nature lovers',
        price: 280,
        originalPrice: 424,
        discount: 34,
        image: '/kids-green.jpg',
        category: 'kids',
        gender: 'kids',
        brand: 'Zoop',
        rating: 4.4,
        reviews: 78
    },
    {
        id: 47,
        name: 'Blue Racer',
        description: 'Fast track blue for racing fans',
        price: 417,
        originalPrice: 474,
        discount: 12,
        image: '/kids-girls-blue.jpg',
        category: 'kids',
        gender: 'kids',
        brand: 'SF',
        rating: 4.6,
        reviews: 98
    },
    {
        id: 48,
        name: 'Barbie Special',
        description: 'Official Barbie watch',
        price: 646,
        originalPrice: 798,
        discount: 19,
        image: '/Barbie watch.jpg',
        category: 'kids',
        gender: 'kids',
        brand: 'Zoop',
        rating: 4.7,
        reviews: 231
    },
    // --- NEW SPORTS WATCHES ---
    {
        id: 49,
        name: 'Velocity Black',
        description: 'High-performance sports watch with durable black silicon strap',
        price: 2878,
        originalPrice: 2998,
        discount: 4,
        image: '/Sports-Black Strap.png',
        category: 'sports',
        gender: 'mens',
        brand: 'Active',
        rating: 4.6,
        reviews: 42
    },
    {
        id: 50,
        name: 'Ocean Racer',
        description: 'Water-resistant sports watch with blue comfortable strap',
        price: 1951,
        originalPrice: 3198,
        discount: 39,
        image: '/Sports-Blue Strap.png',
        category: 'sports',
        gender: 'mens',
        brand: 'Active',
        rating: 4.5,
        reviews: 38
    },
    {
        id: 51,
        name: 'Deep Blue Sport',
        description: 'Bold blue dial sports watch for the active lifestyle',
        price: 2616,
        originalPrice: 3398,
        discount: 23,
        image: '/Sports-Blue.png',
        category: 'sports',
        gender: 'mens',
        brand: 'Active',
        rating: 4.7,
        reviews: 56
    },
    {
        id: 52,
        name: 'Chrono Sprint',
        description: 'Advanced chronograph with precision timing features',
        price: 3749,
        originalPrice: 4998,
        discount: 25,
        image: '/Sports-Chronograph.png',
        category: 'sports',
        gender: 'mens',
        brand: 'Active',
        rating: 4.8,
        reviews: 89,
        isNew: true
    },
    {
        id: 53,
        name: 'Stealth Digital',
        description: 'All-black digital sports watch with night vision',
        price: 2494,
        originalPrice: 2598,
        discount: 4,
        image: '/Sports-Digital All Black.png',
        category: 'sports',
        gender: 'mens',
        brand: 'Active',
        rating: 4.5,
        reviews: 112
    },
    {
        id: 54,
        name: 'Silver Edge Sport',
        description: 'Rugged sports design with premium silver bezel accents',
        price: 2583,
        originalPrice: 3798,
        discount: 32,
        image: '/Sports-Silver Border.png',
        category: 'sports',
        gender: 'mens',
        brand: 'Active',
        rating: 4.6,
        reviews: 24
    },
    {
        id: 55,
        name: 'Voltage Yellow',
        description: 'High-visibility yellow strap sports watch for extreme conditions',
        price: 2231,
        originalPrice: 3098,
        discount: 28,
        image: '/Sports-Yellow Strap.png',
        category: 'sports',
        gender: 'mens',
        brand: 'Active',
        rating: 4.7,
        reviews: 67
    }
];

// Helper Lists for Sections
export const bestsellers = allWatches.filter(w => w.isBestseller);
export const newArrivals = allWatches.filter(w => w.isNew);
export const automaticWatches = allWatches.filter(w => w.category === 'luxury').slice(0, 10); // Simulate automatic with luxury for now

// Helper functions (Preserved)
export const getWatchById = (id) => {
    return allWatches.find(watch => watch.id === parseInt(id));
};

export const getWatchesByCategory = (categoryId) => {
    if (categoryId === 'all') {
        return allWatches;
    }
    if (categoryId === 'bestsellers') {
        const bestsellerIds = new Set(bestsellers.map(w => w.id));
        return allWatches.filter(w => bestsellerIds.has(w.id));
    }
    if (categoryId === 'new-arrivals') {
        const newArrivalIds = new Set(newArrivals.map(w => w.id));
        return allWatches.filter(w => newArrivalIds.has(w.id));
    }

    return allWatches.filter(watch => {
        // Handle gender categories
        if (categoryId === 'mens' || categoryId === 'womens') {
            return watch.gender === categoryId || watch.category === categoryId;
        }
        // Handle other categories
        return watch.category === categoryId;
    });
};

export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(price);
};

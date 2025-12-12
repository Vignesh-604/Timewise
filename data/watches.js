
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
        price: 15999,
        originalPrice: 20999,
        discount: 24,
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
        price: 13499,
        originalPrice: 17999,
        discount: 25,
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
        price: 12999,
        originalPrice: 15999,
        discount: 19,
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
        price: 14500,
        originalPrice: 18500,
        discount: 22,
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
        price: 16999,
        originalPrice: 21999,
        discount: 23,
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
        price: 4999,
        originalPrice: 6999,
        discount: 29,
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
        price: 3500,
        originalPrice: 4500,
        discount: 22,
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
        price: 2999,
        originalPrice: 3999,
        discount: 25,
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
        price: 2899,
        originalPrice: 3999,
        discount: 28,
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
        price: 3299,
        originalPrice: 4599,
        discount: 28,
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
        price: 3499,
        originalPrice: 4999,
        discount: 30,
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
        price: 1999,
        originalPrice: 2999,
        discount: 33,
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
        price: 4599,
        originalPrice: 5999,
        discount: 23,
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
        price: 5999,
        originalPrice: 7999,
        discount: 25,
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
        price: 6999,
        originalPrice: 9999,
        discount: 30,
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
        price: 7499,
        originalPrice: 9999,
        discount: 25,
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
        price: 5500,
        originalPrice: 7500,
        discount: 27,
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
        price: 6200,
        originalPrice: 8200,
        discount: 24,
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
        price: 5800,
        originalPrice: 7800,
        discount: 26,
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
        price: 7999,
        originalPrice: 10999,
        discount: 27,
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
        price: 8999,
        originalPrice: 12999,
        discount: 31,
        image: '/Rotating bezel.jpg',
        category: 'sports',
        gender: 'mens',
        brand: 'Active',
        rating: 4.7,
        reviews: 289
    },
    {
        id: 22,
        name: 'Chrono Digital Leather',
        description: 'Hybrid digital-analog with a rugged leather strap',
        price: 5499,
        originalPrice: 7499,
        discount: 27,
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
        price: 18999,
        originalPrice: 24999,
        discount: 24,
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
        price: 17500,
        originalPrice: 22500,
        discount: 22,
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
        price: 16999,
        originalPrice: 21999,
        discount: 23,
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
        price: 15499,
        originalPrice: 19999,
        discount: 23,
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
        price: 14999,
        originalPrice: 18999,
        discount: 21,
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
        price: 19500,
        originalPrice: 25000,
        discount: 22,
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
        price: 3999,
        originalPrice: 5999,
        discount: 33,
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
        price: 3499,
        originalPrice: 4999,
        discount: 30,
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
        price: 3799,
        originalPrice: 5299,
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
        price: 1999,
        originalPrice: 2999,
        discount: 33,
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
        price: 4200,
        originalPrice: 5500,
        discount: 24,
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
        price: 2499,
        originalPrice: 3499,
        discount: 29,
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
        price: 7999,
        originalPrice: 10999,
        discount: 27,
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
        price: 8999,
        originalPrice: 11999,
        discount: 25,
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
        price: 6500,
        originalPrice: 8500,
        discount: 24,
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
        price: 6800,
        originalPrice: 8800,
        discount: 23,
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
        price: 9500,
        originalPrice: 12500,
        discount: 24,
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
        price: 899,
        originalPrice: 1299,
        discount: 31,
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
        price: 999,
        originalPrice: 1499,
        discount: 33,
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
        price: 1499,
        originalPrice: 1999,
        discount: 25,
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
        price: 799,
        originalPrice: 1199,
        discount: 33,
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
        price: 1299,
        originalPrice: 1699,
        discount: 24,
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
        price: 1100,
        originalPrice: 1500,
        discount: 27,
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
        price: 850,
        originalPrice: 1150,
        discount: 26,
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
        price: 950,
        originalPrice: 1350,
        discount: 30,
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
        price: 1599,
        originalPrice: 2099,
        discount: 24,
        image: '/Barbie watch.jpg',
        category: 'kids',
        gender: 'kids',
        brand: 'Zoop',
        rating: 4.7,
        reviews: 231
    },
];

// Helper Lists for Sections
export const bestsellers = allWatches.filter(w => w.isBestseller);
export const newArrivals = allWatches.filter(w => w.isNew);
export const automaticWatches = allWatches.filter(w => w.category === 'luxury').slice(0, 8); // Simulate automatic with luxury for now

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

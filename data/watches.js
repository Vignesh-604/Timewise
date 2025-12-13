
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
        price: 7999,
        originalPrice: 10499,
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
        price: 6749,
        originalPrice: 8999,
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
        price: 6499,
        originalPrice: 7999,
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
        price: 7250,
        originalPrice: 9250,
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
        price: 8499,
        originalPrice: 10999,
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
        price: 2499,
        originalPrice: 3499,
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
        price: 1750,
        originalPrice: 2250,
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
        price: 1499,
        originalPrice: 1999,
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
        price: 1449,
        originalPrice: 1999,
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
        price: 1649,
        originalPrice: 2299,
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
        price: 1749,
        originalPrice: 2499,
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
        price: 999,
        originalPrice: 1499,
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
        price: 2299,
        originalPrice: 2999,
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
        price: 2999,
        originalPrice: 3999,
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
        price: 3499,
        originalPrice: 4999,
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
        price: 3749,
        originalPrice: 4999,
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
        price: 2750,
        originalPrice: 3750,
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
        price: 3100,
        originalPrice: 4100,
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
        price: 2900,
        originalPrice: 3900,
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
        price: 3999,
        originalPrice: 5499,
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
        price: 4499,
        originalPrice: 6499,
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
        price: 2749,
        originalPrice: 3749,
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
        price: 9499,
        originalPrice: 12499,
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
        price: 8750,
        originalPrice: 11250,
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
        price: 8499,
        originalPrice: 10999,
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
        price: 7749,
        originalPrice: 9999,
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
        price: 7499,
        originalPrice: 9499,
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
        price: 9750,
        originalPrice: 12500,
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
        price: 1999,
        originalPrice: 2999,
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
        price: 1749,
        originalPrice: 2499,
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
        price: 1899,
        originalPrice: 2649,
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
        price: 999,
        originalPrice: 1499,
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
        price: 2100,
        originalPrice: 2750,
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
        price: 1249,
        originalPrice: 1749,
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
        price: 3999,
        originalPrice: 5499,
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
        price: 4499,
        originalPrice: 5999,
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
        price: 3250,
        originalPrice: 4250,
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
        price: 3400,
        originalPrice: 4400,
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
        price: 4750,
        originalPrice: 6250,
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
        price: 449,
        originalPrice: 649,
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
        price: 499,
        originalPrice: 749,
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
        price: 749,
        originalPrice: 999,
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
        price: 399,
        originalPrice: 599,
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
        price: 649,
        originalPrice: 849,
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
        price: 550,
        originalPrice: 750,
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
        price: 425,
        originalPrice: 575,
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
        price: 475,
        originalPrice: 675,
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
        price: 799,
        originalPrice: 1049,
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

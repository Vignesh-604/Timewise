// Reviews data for watches
export const watchReviews = {
    1: [
        {
            id: 1,
            name: 'Tanmay',
            rating: 5,
            headline: 'Excellent quality and design',
            text: 'Amazing watch! The build quality is exceptional and the design is exactly as shown. Fast shipping and great customer service. Highly recommend!',
            date: '15/12/24',
            verified: true,
        },
        {
            id: 2,
            name: 'Gurusevak',
            rating: 4.5,
            headline: 'Good value for money',
            text: 'Good value for money. The watch looks premium and feels solid. Only minor issue was the strap adjustment, but customer service helped me resolve it quickly.',
            date: '10/12/24',
            verified: true,
        },
        {
            id: 3,
            name: 'Pratik',
            rating: 5,
            headline: 'Perfect for daily wear',
            text: 'Perfect watch for daily wear. Comfortable, stylish, and durable. The automatic movement is smooth and accurate. Very happy with this purchase!',
            date: '05/12/24',
            verified: false,
        },
    ],
    2: [
        {
            id: 4,
            name: 'Vaibhav',
            rating: 4.5,
            headline: 'Beautiful watch',
            text: 'Beautiful watch with elegant design. The gold plating looks premium and the watch feels comfortable on the wrist. Great purchase!',
            date: '18/12/24',
            verified: true,
        },
        {
            id: 5,
            name: 'Tanmay',
            rating: 5,
            headline: 'Love it!',
            text: 'Absolutely love this watch! The design is stunning and it goes with everything. Highly recommend to anyone looking for a quality timepiece.',
            date: '12/12/24',
            verified: true,
        },
    ],
    3: [
        {
            id: 6,
            name: 'Hemant k.',
            rating: 2,
            headline: 'Not working well',
            text: 'मैंने ये मॉडल ऑफलाइन खरीदा था 8-9 महीने पहले! अभी ये घड़ी अपने आप टाइम से पीछे हो जाती ही हैं, दिन में 4-5 बार टाइम सेट करना पड़ता है',
            date: '30/07/25',
            verified: true,
        },
        {
            id: 7,
            name: 'Sumit S.',
            rating: 5,
            headline: 'Large but not too large',
            text: 'Perfect size for my wrist. The watch is large enough to be visible but not too large to be uncomfortable. Great design and quality.',
            date: '23/07/25',
            verified: false,
        },
        {
            id: 8,
            name: 'Gurusevak',
            rating: 4.5,
            headline: 'Great sports watch',
            text: 'Great sports watch for active lifestyle. Durable and water-resistant. The rubber strap is comfortable and the watch keeps accurate time.',
            date: '20/12/24',
            verified: true,
        },
        {
            id: 9,
            name: 'Tanmay',
            rating: 5,
            headline: 'Excellent quality',
            text: 'Amazing watch! The build quality is exceptional and the design is exactly as shown. Fast shipping and great customer service.',
            date: '15/12/24',
            verified: true,
        },
        {
            id: 10,
            name: 'Pratik',
            rating: 5,
            headline: 'Perfect for daily wear',
            text: 'Perfect watch for daily wear. Comfortable, stylish, and durable. The automatic movement is smooth and accurate.',
            date: '10/12/24',
            verified: true,
        },
        {
            id: 11,
            name: 'Vaibhav',
            rating: 5,
            headline: 'Love it!',
            text: 'Absolutely love this watch! The design is stunning and it goes with everything. Highly recommend to anyone looking for a quality timepiece.',
            date: '05/12/24',
            verified: false,
        },
    ],
    5: [
        {
            id: 12,
            name: 'Tanmay',
            rating: 5,
            headline: 'Classic and timeless',
            text: 'Classic and timeless design. The steel bracelet is comfortable and the watch keeps excellent time. Very satisfied with my purchase.',
            date: '15/11/24',
            verified: true,
        },
        {
            id: 13,
            name: 'Gurusevak',
            rating: 4.5,
            headline: 'Good quality',
            text: 'Good quality watch at a reasonable price. The build is solid and the design is elegant. Would recommend to others.',
            date: '10/11/24',
            verified: true,
        },
    ],
};

// Helper function to get reviews for a watch
export const getWatchReviews = (watchId) => {
    return watchReviews[watchId] || [];
};

// Helper function to calculate average rating
export const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
};

// Helper function to get rating distribution
export const getRatingDistribution = (reviews) => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach((review) => {
        const rating = Math.floor(review.rating);
        distribution[rating] = (distribution[rating] || 0) + 1;
    });
    return distribution;
};


'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Minus, Plus, ShoppingCart } from 'lucide-react';
import { getWatchById, formatPrice, allWatches } from '@/data/watches';
import { getWatchReviews, calculateAverageRating, getRatingDistribution } from '@/data/reviews';
import { getWatchImage, getWatchImages } from '@/lib/imageHelper';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/contexts/CartContext';
import { useNavigation } from '@/contexts/NavigationContext';

export default function WatchDetailClient({ id }) {
    const watchId = parseInt(id);
    const watch = getWatchById(watchId);
    const reviews = getWatchReviews(watchId);
    const [quantity, setQuantity] = useState(1);
    const [sortBy, setSortBy] = useState('recent');
    const { addToCart } = useCart();
    const { user, openAuthModal } = useNavigation();

    if (!watch) {
        return (
            <main className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Watch Not Found</h1>
                        <p className="text-gray-600">The watch you are looking for does not exist.</p>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    const averageRating = calculateAverageRating(reviews);
    const ratingDistribution = getRatingDistribution(reviews);
    const totalReviews = reviews.length;

    // Get related watches (same category, exclude current watch, ensure no duplicates)
    const seenIds = new Set([watch.id]); // Start with current watch ID
    const relatedWatches = allWatches
        .filter(w => {
            // Filter by category and exclude current watch
            if (w.category !== watch.category || w.id === watch.id) return false;
            // Ensure no duplicates
            if (seenIds.has(w.id)) return false;
            seenIds.add(w.id);
            return true;
        })
        .slice(0, 4);

    // Get image for the watch with fallback
    const watchMainImage = getWatchImage(watch.id, watch.image);

    const handleQuantityChange = (delta) => {
        setQuantity(prev => Math.min(3, Math.max(1, prev + delta)));
    };

    const sortedReviews = [...reviews].sort((a, b) => {
        if (sortBy === 'recent') {
            return new Date(b.date.split('/').reverse().join('-')) - new Date(a.date.split('/').reverse().join('-'));
        }
        return b.rating - a.rating;
    });

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        return (
            <div className="flex items-center gap-0.5">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={`full-${i}`} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                {hasHalfStar && (
                    <div className="relative w-4 h-4">
                        <Star className="w-4 h-4 text-gray-300" />
                        <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        </div>
                    </div>
                )}
                {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                    <Star key={`empty-${i}`} className="w-4 h-4 fill-gray-300 text-gray-300" />
                ))}
            </div>
        );
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Product Detail Section */}
                    <div className="bg-white rounded-lg shadow-sm mb-8">
                        <div className="grid md:grid-cols-2 gap-8 p-8">
                            {/* Left: Images */}
                            <div>
                                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50">
                                    <Image
                                        src={watchMainImage}
                                        alt={watch.name}
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            // Fallback to stock image on error
                                            e.target.src = 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400';
                                        }}
                                    />
                                    {watch.isNew && (
                                        <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded z-10">
                                            NEW
                                        </div>
                                    )}
                                    {watch.discount > 0 && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded z-10">
                                            {watch.discount}% OFF
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right: Product Info */}
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{watch.brand}</p>
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">{watch.name}</h1>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-3xl font-bold text-gray-900">
                                            {formatPrice(watch.price)}
                                        </span>
                                        {watch.originalPrice > watch.price && (
                                            <span className="text-lg text-gray-400 line-through">
                                                {formatPrice(watch.originalPrice)}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500">MRP (Inclusive of all taxes)</p>
                                </div>

                                {/* Quantity and Add to Cart */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-sm font-medium text-gray-700">Quantity:</span>
                                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                                            <button
                                                onClick={() => handleQuantityChange(-1)}
                                                className="p-2 hover:bg-gray-100 transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                                            <button
                                                onClick={() => handleQuantityChange(1)}
                                                className="p-2 hover:bg-gray-100 transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            if (!user) {
                                                openAuthModal();
                                                return;
                                            }
                                            addToCart(watch, quantity);
                                        }}
                                        className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 border-2 border-gray-900"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        ADD TO CART
                                    </button>
                                </div>

                                {/* Specifications */}
                                <div className="border-t border-gray-200 pt-6 mb-6">
                                    <h3 className="font-semibold text-gray-900 mb-3">Key Specifications</h3>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <p><span className="font-medium">Brand:</span> {watch.brand}</p>
                                        <p><span className="font-medium">Category:</span> {watch.category}</p>
                                        {watch.gender && <p><span className="font-medium">Gender:</span> {watch.gender}</p>}
                                        <p><span className="font-medium">Movement:</span> Automatic with Manual Winding</p>
                                        <p><span className="font-medium">Power Reserve:</span> 40 Hours</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="border-t border-gray-200 pt-6">
                                    <h3 className="font-semibold text-gray-900 mb-3">Product Description</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{watch.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* You may also like */}
                    {relatedWatches.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">You may also like</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {relatedWatches.map((relatedWatch, index) => (
                                    <ProductCard key={relatedWatch.id} watch={relatedWatch} index={index} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Reviews Section */}
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">CUSTOMER REVIEWS</h2>
                            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors border-2 border-gray-900">
                                Write A Review
                            </button>
                        </div>

                        {/* Overall Rating */}
                        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-200">
                            <div>
                                <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating}</div>
                                <div className="mb-2">{renderStars(parseFloat(averageRating))}</div>
                                <p className="text-sm text-gray-600">Based on {totalReviews} reviews</p>
                            </div>
                            <div className="md:col-span-2">
                                <div className="space-y-2">
                                    {[5, 4, 3, 2, 1].map((star) => {
                                        const count = ratingDistribution[star] || 0;
                                        const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                                        return (
                                            <div key={star} className="flex items-center gap-3">
                                                <span className="text-sm text-gray-600 w-8">{star} star</span>
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gray-900 rounded-full"
                                                        style={{ width: `${percentage}%` }}
                                                    />
                                                </div>
                                                <span className="text-sm text-gray-600 w-8 text-right">{count}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Sort By */}
                        <div className="mb-6">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-amber-500"
                            >
                                <option value="recent">Sort by: Most Recent</option>
                                <option value="rating">Sort by: Highest Rating</option>
                            </select>
                        </div>

                        {/* Individual Reviews */}
                        <div className="space-y-6">
                            {sortedReviews.length > 0 ? (
                                sortedReviews.map((review) => (
                                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                                    <span className="text-gray-600 font-medium">
                                                        {review.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold text-gray-900">{review.name}</span>
                                                        {review.verified && (
                                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                                                Verified Reviewer
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        {renderStars(review.rating)}
                                                        <span className="text-xs text-gray-500">{review.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-2">{review.headline}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review!</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

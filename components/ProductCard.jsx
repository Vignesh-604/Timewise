'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavigationLink from './NavigationLink';
import { ShoppingCart, Star } from 'lucide-react';
import { formatPrice } from '@/data/watches';
import { getWatchImage } from '@/lib/imageHelper';
import { useNavigation } from '@/contexts/NavigationContext';
import { useCart } from '@/contexts/CartContext';

export default function ProductCard({ watch, index = 0 }) {
    const { user, openAuthModal } = useNavigation();
    const { addToCart } = useCart();
    const [imgSrc, setImgSrc] = useState(getWatchImage(watch.id, watch.image));
    const discountedPrice = watch.price;
    const originalPrice = watch.originalPrice;
    const discount = watch.discount;

    return (
        <NavigationLink href={`/watch/${watch.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <Image
                        src={imgSrc}
                        alt={watch.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => {
                            setImgSrc('https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400');
                        }}
                    />

                    {/* Discount Badge */}
                    {discount > 0 && (
                        <div className={`absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10 ${watch.isBestseller ? 'hidden md:block' : ''}`}>
                            {discount}% OFF
                        </div>
                    )}

                    {/* Badges on Right */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
                        {/* New Badge */}
                        {watch.isNew && (
                            <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                NEW
                            </div>
                        )}

                        {/* Best Seller Badge */}
                        {watch.isBestseller && (
                            <div className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                                BEST SELLER
                            </div>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-2">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (!user) {
                                        openAuthModal();
                                        return;
                                    }
                                    addToCart(watch);
                                }}
                                className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-900 py-2 px-4 rounded text-sm font-medium hover:bg-amber-400 transition-colors"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        {watch.brand}
                    </p>
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">
                        {watch.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                        {watch.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                            {formatPrice(discountedPrice)}
                        </span>
                        {originalPrice > discountedPrice && (
                            <span className="text-sm text-gray-400 line-through">
                                {formatPrice(originalPrice)}
                            </span>
                        )}
                    </div>

                    {/* Rating */}
                    {watch.rating && (
                        <div className="flex items-center gap-1 mt-2">
                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            <span className="text-sm text-gray-600">{watch.rating}</span>
                        </div>
                    )}

                    {/* Stock Information */}
                    {watch.stock !== undefined && watch.stock > 0 && watch.stock <= 5 && (
                        <div className="mt-2">
                            <p className="text-xs text-red-600 font-medium">
                                Only {watch.stock} left in stock!
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </NavigationLink>
    );
}

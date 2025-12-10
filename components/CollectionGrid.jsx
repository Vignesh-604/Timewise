'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const collections = [
    { id: 1, name: 'Raga', subtitle: 'Glamour', image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=300', category: 'luxury', gender: 'women' },
    { id: 2, name: 'Edge', subtitle: 'by Titan', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300', category: 'classic', gender: 'men' },
    { id: 3, name: 'Raga', subtitle: 'Mother of Pearl', image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=300', category: 'luxury', gender: 'women' },
    { id: 4, name: 'Titan', subtitle: 'Stellar', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=300', category: 'luxury', gender: 'men' },
    { id: 5, name: 'Raga', subtitle: 'Cocktails', image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=300', category: 'classic', gender: 'women' },
    { id: 6, name: 'Titan', subtitle: 'Automatic', image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=300', category: 'luxury', gender: 'men' },
    { id: 7, name: 'Raga', subtitle: 'Seduction', image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=300', category: 'luxury', gender: 'women' },
    { id: 8, name: 'Titan', subtitle: 'Classic', image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=300', category: 'classic', gender: 'men' },
    { id: 9, name: 'Titan', subtitle: 'Sports', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=300', category: 'sports', gender: 'men' },
    { id: 10, name: 'Raga', subtitle: 'Elegance', image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=300', category: 'luxury', gender: 'women' },
    { id: 11, name: 'Titan', subtitle: 'Leather', image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=300', category: 'leather', gender: 'men' },
    { id: 12, name: 'Edge', subtitle: 'Premium', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300', category: 'luxury', gender: 'men' },
];

export default function CollectionGrid() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(4);
    
    // Update items per view based on screen size
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(2);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(3);
            } else {
                setItemsPerView(4);
            }
        };
        
        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);
    
    const maxIndex = Math.max(0, collections.length - itemsPerView);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const getCategoryLink = (collection) => {
        // Prioritize category over gender for navigation
        if (collection.category) {
            return `/category/${collection.category}`;
        }
        return `/category/${collection.gender}`;
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        Collection
                    </h2>
                    <div className="w-16 h-1 bg-amber-500 mx-auto mt-3"></div>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    {currentIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-amber-50 transition-colors border-2 border-gray-900"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                    )}

                    {currentIndex < maxIndex && (
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-amber-50 transition-colors border-2 border-gray-900"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>
                    )}

                    {/* Carousel */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex gap-4 transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * 1}rem))`
                            }}
                        >
                            {collections.map((collection, index) => (
                                <Link
                                    key={collection.id}
                                    href={getCategoryLink(collection)}
                                    className="flex-shrink-0"
                                    style={{ 
                                        width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) / itemsPerView * 1}rem)`,
                                        minWidth: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) / itemsPerView * 1}rem)`
                                    }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.03 }}
                                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                                    >
                                        <Image
                                            src={collection.image}
                                            alt={collection.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <p className="text-xs uppercase tracking-wider opacity-80">{collection.subtitle}</p>
                                                <h3 className="text-lg font-bold">{collection.name}</h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

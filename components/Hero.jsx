'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const heroImages = [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920', // Current
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1920', // Men's Chrono
    'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1920', // Ceramic
    'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=1920'      // Women's Luxury
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black mt-16">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }} // Keeping opacity low for text readability
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    Timeless Elegance,{' '}
                    <span className="text-gold-400">Crafted for You</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-8"
                >
                    Discover premium watches that define sophistication and style
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#bestsellers"
                        className="px-8 py-4 bg-gold-500 text-gray-900 rounded-lg font-semibold hover:bg-gold-600 transition-all hover:scale-105"
                    >
                        Explore Collection
                    </a>

                </motion.div>
            </div>
        </section>
    );
}

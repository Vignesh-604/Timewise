'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const taglines = {
    kids: [
        'TimeWise Kids — Jahan padhai aur fun dono on time!',
        'Bachchon ka time manager — TimeWise Kids Edition.',
        'Homework ho ya playtime — TimeWise keeps you on track!',
        'Samay ka superhero — TimeWise Kids.',
    ],
    college: [
        'Late hona? Not my vibe — TimeWise on my wrist.',
        'Smart look. Smart time. TimeWise.',
        'Style bhi, discipline bhi — TimeWise bhi.',
        'Stay sharp. Stay TimeWise.',
    ],
    luxury: [
        'Elegance crafted in time — TimeWise.',
        'Where design meets precision — TimeWise.',
        'Minimal, timeless, flawless — TimeWise.',
        'Your wrist deserves better — TimeWise Classic Series',
    ],
    default: [
        'Discovering timeless elegance...',
        'Crafting your perfect timepiece...',
        'Where time meets style...',
        'Timeless elegance awaits...',
    ],
};

export default function LoadingOverlay({ taglineType = 'default' }) {
    // Select a random tagline from the appropriate category
    const taglineArray = taglines[taglineType] || taglines.default;
    const randomTagline = taglineArray[Math.floor(Math.random() * taglineArray.length)];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
            <div className="text-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center shadow-lg">
                        <Clock className="w-12 h-12 text-amber-600" strokeWidth={1.5} />
                    </div>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-gray-900 mb-4"
                >
                    TimeWise
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 text-lg max-w-md mx-auto px-4"
                >
                    {randomTagline}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex justify-center gap-2"
                >
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </motion.div>
            </div>
        </motion.div>
    );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function PromoModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasSeenPromo = sessionStorage.getItem('hasSeenPromo');
        if (!hasSeenPromo) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenPromo', 'true');
    };

    const handleShopNow = () => {
        handleClose();
        const bestsellersSection = document.getElementById('bestsellers');
        if (bestsellersSection) {
            bestsellersSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-[85vw] max-w-5xl cursor-pointer"
                        onClick={handleShopNow}
                    >
                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClose();
                            }}
                            className="absolute -top-3 -right-3 p-3 bg-white rounded-full shadow-lg z-20 hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-6 h-6 text-gray-700" />
                        </button>

                        {/* Image Only */}
                        <Image
                            src="/promo-50-off.png"
                            alt="50% OFF Sale - Dec 13 to Dec 31"
                            width={900}
                            height={900}
                            className="rounded-3xl shadow-2xl w-full h-auto"
                            priority
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

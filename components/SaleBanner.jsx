'use client';

import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SaleBanner() {
    const [isVisible, setIsVisible] = useState(true);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const hasDismissed = sessionStorage.getItem('saleBannerDismissed');
        if (hasDismissed) {
            setDismissed(true);
            setIsVisible(false);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setDismissed(true);
        sessionStorage.setItem('saleBannerDismissed', 'true');
    };

    if (!isVisible || dismissed) return null;

    return (
        <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-gray-900">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 relative">
                <span className="text-sm md:text-base font-semibold text-center">
                    🎉 <span className="font-bold">FLASH SALE!</span> Get <span className="font-extrabold">50% OFF*</span> on most watches — <span className="underline">14th - 20th December</span> 🎉
                </span>
                <button
                    onClick={handleDismiss}
                    className="absolute right-4 p-1 hover:bg-amber-600/20 rounded-full transition-colors"
                    aria-label="Dismiss"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

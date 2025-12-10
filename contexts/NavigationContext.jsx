'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import LoadingOverlay from '@/components/LoadingOverlay';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
    const [isNavigating, setIsNavigating] = useState(false);
    const [taglineType, setTaglineType] = useState('default');
    const pathname = usePathname();

    useEffect(() => {
        // Reset navigating state when pathname changes
        setIsNavigating(false);
    }, [pathname]);

    const startNavigation = (url) => {
        // Determine tagline type based on URL
        if (url.includes('/category/kids')) {
            setTaglineType('kids');
        } else if (url.includes('/category/luxury') || url.includes('/category/classic')) {
            setTaglineType('luxury');
        } else if (url.includes('/category/') || url.includes('/watch/')) {
            // For other categories and watch pages, use college taglines
            setTaglineType('college');
        } else if (url === '/' || url === '/login' || url === '/register') {
            setTaglineType('default');
        } else {
            // Default to college for other pages
            setTaglineType('college');
        }
        setIsNavigating(true);
    };

    return (
        <NavigationContext.Provider value={{ startNavigation, isNavigating }}>
            {children}
            <AnimatePresence>
                {isNavigating && <LoadingOverlay taglineType={taglineType} />}
            </AnimatePresence>
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within NavigationProvider');
    }
    return context;
}


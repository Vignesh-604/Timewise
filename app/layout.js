import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { NavigationProvider } from '@/contexts/NavigationContext';
import { CartProvider } from '@/contexts/CartContext';
import VisitTracker from '@/components/VisitTracker';
import AuthModal from '@/components/AuthModal';

import PromoModal from '@/components/PromoModal';
import ConsoleSuppressor from '@/components/ConsoleSuppressor';

const inter = Inter({ subsets: ['latin'] });


export const metadata = {
    metadataBase: new URL('https://timewise-store.vercel.app'), // Replace with your actual domain
    title: {
        default: 'Timewise - Premium Watches Collection',
        template: '%s | Timewise'
    },
    description: 'Discover luxury watches for every occasion. Shop our exclusive collection of premium, automatic, and classic timepieces.',
    keywords: [
        'watches', 'luxury watches', 'premium timepieces', 'automatic watches',
        'mens watches', 'womens watches', 'kids watches', 'smart watches',
        'analog watches', 'digital watches', 'leather strap watches',
        'metal strap watches', 'designer watches', 'gift for him', 'gift for her',
        'Timewise', 'Indian watch brands', 'affordable luxury', 'chronograph'
    ],
    authors: [{ name: 'Timewise Team' }],
    creator: 'Timewise',
    publisher: 'Timewise',
    icons: {
        icon: '/watch-icon.png',
        apple: '/watch-icon.png',
    },
    openGraph: {
        title: 'Timewise - Premium Watches Collection',
        description: 'Discover luxury watches for every occasion. Shop our exclusive collection of premium, automatic, and classic timepieces.',
        url: 'https://timewise-store.vercel.app',
        siteName: 'Timewise',
        images: [
            {
                url: '/logo-bg.jpeg', // Using your logo as the social preview for now
                width: 800,
                height: 600,
                alt: 'Timewise Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Timewise - Premium Watches Collection',
        description: 'Discover luxury watches for every occasion.',
        images: ['/logo-bg.jpeg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavigationProvider>
                    <CartProvider>
                        <VisitTracker />
                        <ConsoleSuppressor />
                        <PromoModal />
                        <AuthModal />
                        {children}
                        <Toaster
                            position="top-right"
                            toastOptions={{
                                duration: 3000,
                                style: {
                                    background: '#363636',
                                    color: '#fff',
                                },
                                success: {
                                    duration: 3000,
                                    iconTheme: {
                                        primary: '#f59e0b',
                                        secondary: '#fff',
                                    },
                                },
                            }}
                        />
                    </CartProvider>
                </NavigationProvider>
            </body>
        </html>
    );
}

import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { NavigationProvider } from '@/contexts/NavigationContext';
import { CartProvider } from '@/contexts/CartContext';
import VisitTracker from '@/components/VisitTracker';
import AuthModal from '@/components/AuthModal';

import ConsoleSuppressor from '@/components/ConsoleSuppressor';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Timewise - Premium Watches Collection',
    description: 'Discover luxury watches for every occasion',
    icons: {
        icon: '/watch-icon.png',
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

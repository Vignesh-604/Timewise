import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { NavigationProvider } from '@/contexts/NavigationContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Timewise - Premium Watches Collection',
    description: 'Discover luxury watches for every occasion',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavigationProvider>
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
                </NavigationProvider>
            </body>
        </html>
    );
}

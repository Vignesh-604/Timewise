'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { User, LogOut } from 'lucide-react';
import { useNavigation } from '@/contexts/NavigationContext';
import NavigationLink from './NavigationLink';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, setUser, isAuthLoading, startNavigation, setIsAuthLoading } = useNavigation();
    const router = useRouter();
    const pathname = usePathname();

    const categories = [
        { href: '/category/classic', label: 'Classic' },
        { href: '/category/luxury', label: 'Luxury' },
        { href: '/category/leather', label: 'Leather' },
        { href: '/category/sports', label: 'Sports' },
        { href: '/category/kids', label: 'Kids' },
        { href: '/category/metal', label: 'Metal' },
        { href: '/category/men', label: 'Men' },
        { href: '/category/women', label: 'Women' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = async () => {
        try {
            setIsAuthLoading(true);
            startNavigation('/'); // Show overlay
            await fetch('/api/auth/logout', { method: 'POST' });
            setUser(null);
            router.push('/');
            router.refresh();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setIsAuthLoading(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <NavigationLink href="/" className="flex items-center">
                        <div className="relative w-32 h-16">
                            <Image
                                src="/logo.png"
                                alt="Timewise Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </NavigationLink>

                    {/* Categories - Centered */}
                    {/* Categories - Centered */}
                    <div className="hidden md:flex flex-1 justify-center mx-8">
                        <div className="flex items-center gap-4">
                            {categories.map((category) => (
                                <NavigationLink
                                    key={category.href}
                                    href={category.href}
                                    className={`text-sm font-medium transition-colors ${pathname === category.href
                                        ? 'text-amber-500 font-bold'
                                        : 'text-gray-700 hover:text-amber-600'
                                        }`}
                                >
                                    {category.label}
                                </NavigationLink>
                            ))}
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        {/* User */}
                        {isAuthLoading ? (
                            <div className="text-sm text-gray-500">...</div>
                        ) : user ? (
                            <div className="flex items-center gap-3">
                                <span className="text-base font-semibold text-gray-700 hidden md:block">
                                    Hello, {user.name.split(' ')[0]} 👋
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-1 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors border border-gray-900"
                                >
                                    <LogOut className="w-4 h-4" />
                                    <span className="hidden md:inline">Logout</span>
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <NavigationLink
                                    href="/login"
                                    className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all duration-300 border border-gray-300 rounded-full hover:border-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100"
                                >
                                    Login
                                </NavigationLink>
                                <NavigationLink
                                    href="/register"
                                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 border border-gray-900 shadow-md hover:shadow-lg transform hover:scale-105"
                                >
                                    Register
                                </NavigationLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

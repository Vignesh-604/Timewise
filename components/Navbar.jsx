'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, LogOut, ShoppingCart, PackageCheck, Menu, X } from 'lucide-react';
import { useNavigation } from '@/contexts/NavigationContext';
import { useCart } from '@/contexts/CartContext';
import NavigationLink from './NavigationLink';
import CartDrawer from './CartDrawer';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, setUser, isAuthLoading, startNavigation, endNavigation, setIsAuthLoading } = useNavigation();
    const { setIsCartOpen, cartCount } = useCart();
    const router = useRouter();
    const pathname = usePathname();

    const categories = [
        { href: '/category/classic', label: 'Classic' },
        { href: '/category/luxury', label: 'Luxury' },
        { href: '/category/leather', label: 'Leather' },
        { href: '/category/sports', label: 'Sports' },
        { href: '/category/kids', label: 'Kids' },
        { href: '/category/metal', label: 'Metal' },
        { href: '/category/mens', label: 'Mens' },
        { href: '/category/womens', label: 'Womens' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close sidebar when route changes
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [pathname]);

    const handleLogout = async () => {
        try {
            setIsAuthLoading(true);
            setIsSidebarOpen(false);
            startNavigation('/'); // Show overlay
            await fetch('/api/auth/logout', { method: 'POST' });
            setUser(null);
            router.push('/');
            router.refresh();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setIsAuthLoading(false);
            endNavigation(); // Ensure loading overlay is removed
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Mobile Menu & Logo */}
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="md:hidden p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-full"
                        >
                            <Menu className="w-6 h-6" />
                        </button>

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
                    </div>

                    {/* Categories - Centered (Desktop) */}
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

                    {/* Right Actions (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {user && (
                            <>
                                {/* Orders Button */}
                                <button
                                    onClick={() => router.push('/orders')}
                                    title="My Orders"
                                    className={`flex items-center gap-2 p-2 transition-colors group ${pathname === '/orders' ? 'text-amber-500 font-bold' : 'text-gray-700 hover:text-amber-500'}`}
                                >
                                    <PackageCheck className={`w-6 h-6 ${pathname === '/orders' ? 'text-amber-500' : ''}`} />
                                    <span className={`hidden md:inline font-medium text-sm group-hover:text-amber-600 ${pathname === '/orders' ? 'text-amber-500' : ''}`}>Orders</span>
                                </button>

                                {/* Cart Button */}
                                <button
                                    onClick={() => setIsCartOpen(true)}
                                    className="relative flex items-center gap-2 p-2 text-gray-700 hover:text-amber-500 transition-colors group"
                                >
                                    <div className="relative">
                                        <ShoppingCart className="w-6 h-6" />
                                        {cartCount > 0 && (
                                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                                {cartCount}
                                            </span>
                                        )}
                                    </div>
                                    <span className="hidden md:inline font-medium text-sm group-hover:text-amber-600">Cart</span>
                                </button>
                            </>
                        )}

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

                    {/* Mobile Right: Cart Only (Users usually want quick access) */}
                    <div className="flex md:hidden items-center gap-2">
                        {user && (
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-gray-700"
                            >
                                <ShoppingCart className="w-6 h-6" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        )}
                        {/* Auth links for mobile if not logged in */}
                        {!user && !isAuthLoading && (
                            <NavigationLink
                                href="/login"
                                className="px-3 py-1.5 text-xs font-semibold text-white bg-gray-900 rounded-full"
                            >
                                Login
                            </NavigationLink>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: isSidebarOpen ? 0 : '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl md:hidden flex flex-col"
            >
                {/* Sidebar Header */}
                <div className="p-4 flex items-center justify-between border-b border-gray-100">
                    <div className="relative w-24 h-12">
                        <Image
                            src="/logo.png"
                            alt="Timewise Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full text-gray-500"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Sidebar Content */}
                <div className="flex-1 overflow-y-auto py-4">
                    {/* Categories Section */}
                    <div className="px-6 mb-6">
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-3">Collections</p>
                        <div className="space-y-1">
                            {categories.map((category) => (
                                <Link
                                    key={category.href}
                                    href={category.href}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`block py-1 text-sm font-medium transition-colors ${pathname === category.href
                                        ? 'text-amber-500'
                                        : 'text-gray-700 hover:text-amber-600'
                                        }`}
                                >
                                    {category.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-gray-100 my-2" />

                    {/* User Links Section */}
                    {user && (
                        <div className="px-6 py-4 space-y-3">
                            <button
                                onClick={() => {
                                    setIsCartOpen(true);
                                    setIsSidebarOpen(false);
                                }}
                                className="flex items-center gap-3 w-full py-2 text-sm font-medium text-gray-700 hover:text-amber-600"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Cart
                                {cartCount > 0 && (
                                    <span className="ml-auto bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/orders');
                                    setIsSidebarOpen(false);
                                }}
                                className={`flex items-center gap-3 w-full py-2 text-sm font-medium ${pathname === '/orders' ? 'text-amber-500' : 'text-gray-700 hover:text-amber-600'
                                    }`}
                            >
                                <PackageCheck className="w-5 h-5" />
                                My Orders
                            </button>
                        </div>
                    )}
                </div>

                {/* Sidebar Footer (Logout) */}
                {user ? (
                    <div className="p-4 border-t border-gray-100 bg-gray-50">
                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-gray-200 text-red-600 rounded-lg text-sm font-semibold hover:bg-red-50 hover:border-red-100 transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2">
                        <Link
                            href="/login"
                            onClick={() => setIsSidebarOpen(false)}
                            className="block w-full py-2.5 text-center bg-white border border-gray-200 text-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-50"
                        >
                            Log In
                        </Link>
                        <Link
                            href="/register"
                            onClick={() => setIsSidebarOpen(false)}
                            className="block w-full py-2.5 text-center bg-amber-500 text-white rounded-lg text-sm font-semibold hover:bg-amber-600 shadow-sm"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </motion.div>

            <CartDrawer />
        </motion.nav>
    );
}

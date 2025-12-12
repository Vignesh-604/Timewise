'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useNavigation } from '@/contexts/NavigationContext';

export default function AuthModal() {
    const { isAuthModalOpen, closeAuthModal } = useNavigation();

    if (!isAuthModalOpen) return null;

    return (
        <AnimatePresence>
            {isAuthModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAuthModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeAuthModal}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-20"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>

                        <div className="p-8 flex flex-col items-center text-center">
                            {/* Logo */}
                            <div className="relative w-40 h-16 mb-6">
                                <Image
                                    src="/logo.png"
                                    alt="Timewise"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Login to continue
                            </h3>
                            <p className="text-sm text-gray-500 mb-8">
                                Please login to add items to your cart
                            </p>

                            {/* Login Button */}
                            <Link
                                href="/login"
                                onClick={closeAuthModal}
                                className="w-full bg-amber-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-amber-500/30 hover:bg-amber-600 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 transition-all duration-200 mb-4"
                            >
                                Login
                            </Link>

                            {/* Sign Up Link */}
                            <div className="text-sm text-gray-500">
                                Don't have an account?{' '}
                                <Link
                                    href="/register"
                                    onClick={closeAuthModal}
                                    className="font-semibold text-amber-600 hover:text-amber-700"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

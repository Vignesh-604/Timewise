'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { useNavigation } from '@/contexts/NavigationContext';

export default function LoginCTA() {
    const { user } = useNavigation();

    if (user) return null;

    return (
        <section className="py-20 bg-gradient-to-b from-amber-50/80 to-white border-t border-amber-100">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100/50 text-amber-700 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                        <Sparkles className="w-3 h-3" />
                        <span>Join the Elite</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif tracking-tight">
                        UNLOCK TIMELESS ELEGANCE
                    </h2>

                    <p className="text-gray-600 mb-10 text-lg leading-relaxed max-w-2xl">
                        Become a member to enjoy exclusive access to new arrivals,
                        saves to wishlist, and seamless order tracking.
                        Your perfect timepiece is just a click away.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                        <Link
                            href="/login"
                            className="w-full sm:w-auto px-10 py-4 bg-gray-900 text-white font-medium tracking-wide rounded-md hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-200/50 transform hover:-translate-y-0.5"
                        >
                            LOGIN & SHOP NOW
                        </Link>

                        <Link
                            href="/register"
                            className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-gray-200 text-gray-800 font-medium tracking-wide rounded-md hover:border-amber-600 hover:text-amber-600 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            CREATE ACCOUNT
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

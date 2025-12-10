'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Find Your Perfect Timepiece
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Explore our exclusive collection of premium watches. From classic elegance to modern sophistication, discover the watch that defines your style.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#bestsellers"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-gray-900 rounded-full font-semibold hover:bg-amber-400 transition-colors"
                        >
                            Shop Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/register"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            Create Account
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

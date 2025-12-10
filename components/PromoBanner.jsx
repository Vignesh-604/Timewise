'use client';

import { motion } from 'framer-motion';

export default function PromoBanner() {
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl overflow-hidden group cursor-pointer"
                    >
                        <div className="relative z-10">
                            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-white font-semibold mb-4">
                                Limited Time
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-4">
                                10% Cashback
                            </h3>
                            <p className="text-white/90 text-lg mb-6">
                                On all luxury watches this week
                            </p>
                            <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Shop Now
                            </button>
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"
                        ></motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden group cursor-pointer"
                    >
                        <div className="relative z-10">
                            <div className="inline-block px-4 py-2 bg-gold-400/20 rounded-full text-gold-400 font-semibold mb-4">
                                New Arrivals
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-4">
                                Flat 5% Off
                            </h3>
                            <p className="text-white/90 text-lg mb-6">
                                On latest smartwatch collection
                            </p>
                            <button className="px-6 py-3 bg-gold-400 text-gray-900 rounded-lg font-semibold hover:bg-gold-500 transition-colors">
                                Explore More
                            </button>
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -left-10 -top-10 w-40 h-40 bg-gold-400/10 rounded-full"
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

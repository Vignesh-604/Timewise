'use client';

import { motion } from 'framer-motion';
import { promoBanners } from '@/data/watches';

export default function PromoBanners() {
    return (
        <section className="py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-4">
                    {promoBanners.map((banner, index) => (
                        <motion.div
                            key={banner.id}
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className={`relative bg-gradient-to-r ${banner.bgColor} rounded-xl p-6 cursor-pointer overflow-hidden`}
                        >
                            <div className="relative z-10">
                                <h3 className={`text-2xl md:text-3xl font-bold ${banner.textColor}`}>
                                    {banner.title}
                                </h3>
                                <p className={`${banner.textColor} opacity-80 mt-1`}>
                                    {banner.subtitle}
                                </p>
                                <button className={`mt-4 px-4 py-2 rounded-lg font-medium transition-colors ${index === 0
                                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                                        : 'bg-amber-400 text-gray-900 hover:bg-amber-500'
                                    }`}>
                                    Shop Now
                                </button>
                            </div>

                            {/* Decorative Circle */}
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
                            <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-white/10 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

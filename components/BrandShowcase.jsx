'use client';

import { motion } from 'framer-motion';
import { brands } from '@/data/watches';

export default function BrandShowcase() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Shop by Brand
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Explore our premium watch brands
                    </p>
                </motion.div>

                {/* Brand Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                            className="bg-gray-50 rounded-xl p-6 flex items-center justify-center cursor-pointer hover:bg-amber-50 transition-colors aspect-square"
                        >
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600 mb-2">
                                    {brand.name.charAt(0)}
                                </div>
                                <p className="text-sm font-medium text-gray-700">{brand.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

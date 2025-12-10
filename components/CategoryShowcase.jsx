'use client';

import { motion } from 'framer-motion';

const categories = [
    { name: 'Men', icon: '👔' },
    { name: 'Women', icon: '👗' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Luxury', icon: '💎' },
    { name: 'Smart', icon: '📱' },
    { name: 'Classic', icon: '⌚' },
];

export default function CategoryShowcase() {
    return (
        <section id="collections" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Shop by <span className="text-gold-500">Category</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Find the perfect watch for every occasion
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer group"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-125 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {category.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

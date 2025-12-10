'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductSection({ title, subtitle, products, viewAllLink = '#', bgColor = 'bg-white' }) {
    return (
        <section className={`py-12 ${bgColor}`}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-8"
                >
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-gray-500 mt-1">{subtitle}</p>
                        )}
                    </div>
                    <a
                        href={viewAllLink}
                        className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1 group"
                    >
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {products.map((watch, index) => (
                        <ProductCard key={watch.id} watch={watch} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

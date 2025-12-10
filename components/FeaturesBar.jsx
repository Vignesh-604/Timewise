'use client';

import { motion } from 'framer-motion';
import { Award, RotateCcw, Truck } from 'lucide-react';

const features = [
    {
        icon: Award,
        title: '100% ORIGINAL',
    },
    {
        icon: RotateCcw,
        title: '7 DAY RETURN',
    },
    {
        icon: Truck,
        title: 'FREE SHIPPING',
    },
];

export default function FeaturesBar() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 flex items-center justify-center mb-3">
                                    <IconComponent className="w-12 h-12 text-amber-500 stroke-[1.5]" />
                                </div>
                                <h3 className="text-sm md:text-base font-semibold text-gray-900 tracking-wide">
                                    {feature.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Settings, Zap } from 'lucide-react';

const movements = [
    {
        id: 1,
        name: 'Mechanical',
        description: 'Traditional craftsmanship with intricate movements',
        icon: Settings,
        image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500',
    },
    {
        id: 2,
        name: 'Quartz',
        description: 'Precision accuracy with modern technology',
        icon: Zap,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500',
    },
];

export default function MovementSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">
                        Movement in Time
                    </h2>
                    <div className="w-16 h-1 bg-amber-500 mx-auto mt-3"></div>
                    <p className="text-gray-500 mt-4">
                        Choose your preferred watch movement
                    </p>
                </motion.div>

                {/* Movement Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {movements.map((movement, index) => {
                        const IconComponent = movement.icon;
                        return (
                            <motion.div
                                key={movement.id}
                                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="relative rounded-2xl overflow-hidden cursor-pointer group h-80"
                            >
                                <Image
                                    src={movement.image}
                                    alt={movement.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">{movement.name}</h3>
                                        </div>
                                        <p className="text-gray-300">{movement.description}</p>
                                        <button className="mt-4 px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-amber-400 transition-colors">
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

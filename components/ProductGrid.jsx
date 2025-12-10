'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const watches = [
    {
        id: 1,
        name: 'Classic Chronograph',
        price: '$599',
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400',
    },
    {
        id: 2,
        name: 'Executive Gold',
        price: '$899',
        image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400',
    },
    {
        id: 3,
        name: 'Sport Titanium',
        price: '$749',
        image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400',
    },
    {
        id: 4,
        name: 'Luxury Diamond',
        price: '$1,299',
        image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400',
    },
    {
        id: 5,
        name: 'Vintage Leather',
        price: '$449',
        image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400',
    },
    {
        id: 6,
        name: 'Digital Smart',
        price: '$699',
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function ProductGrid() {
    return (
        <section id="watches" className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured <span className="text-primary-600">Collection</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Handpicked timepieces for the discerning collector
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {watches.map((watch) => (
                        <motion.div
                            key={watch.id}
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={watch.image}
                                    alt={watch.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {watch.name}
                                </h3>
                                <p className="text-2xl font-bold text-primary-600">
                                    {watch.price}
                                </p>
                                <button className="mt-4 w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-primary-600 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

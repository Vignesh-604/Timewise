'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import NavigationLink from './NavigationLink';

const categories = [
    { id: 'mens', name: 'Mens', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
    { id: 'womens', name: 'Womens', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop' },
    { id: 'kids', name: 'Kids', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop' },
    { id: 'classic', name: 'Classic', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=200&fit=crop' },
    { id: 'luxury', name: 'Luxury', image: 'https://images.unsplash.com/photo-1584208124888-3a20b9c799e2?w=200&h=200&fit=crop' },
    { id: 'leather', name: 'Leather', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=200&h=200&fit=crop' },
    { id: 'sports', name: 'Sports', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=200&fit=crop' },
    { id: 'metal', name: 'Metal', image: 'https://images.unsplash.com/photo-1526045431048-f857369baa09?w=200&h=200&fit=crop' },
];

export default function CategoryBar() {
    return (
        <section className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-start md:justify-center gap-8 py-4 overflow-x-auto w-full scrollbar-hide">
                    {categories.map((category, index) => {
                        return (
                            <NavigationLink key={category.id} href={`/category/${category.id}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col items-center gap-2 min-w-fit group cursor-pointer"
                                >
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-amber-500 transition-all duration-300 group-hover:scale-110">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover"
                                            sizes="64px"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-amber-600 transition-colors">
                                        {category.name}
                                    </span>
                                </motion.div>
                            </NavigationLink>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

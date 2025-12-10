'use client';

import { motion } from 'framer-motion';
import NavigationLink from './NavigationLink';
import { User, Users, Baby, Watch, Settings, Heart, Sparkles, Shirt, Activity } from 'lucide-react';

const categories = [
    { id: 'classic', name: 'Classic', icon: Watch },
    { id: 'luxury', name: 'Luxury', icon: Sparkles },
    { id: 'leather', name: 'Leather', icon: Shirt },
    { id: 'sports', name: 'Sports', icon: Activity },
    { id: 'kids', name: 'Kids', icon: Baby },
    { id: 'metal', name: 'Metal', icon: Settings },
    { id: 'men', name: 'Men', icon: User },
    { id: 'women', name: 'Women', icon: Users },
];

export default function CategoryBar() {
    return (
        <section className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-center gap-8 py-4 overflow-x-auto">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <NavigationLink key={category.id} href={`/category/${category.id}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col items-center gap-2 min-w-fit group cursor-pointer"
                                >
                                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
                                        <IconComponent className="w-7 h-7 text-gray-600 group-hover:text-amber-600" />
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

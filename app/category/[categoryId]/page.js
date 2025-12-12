'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getWatchesByCategory } from '@/data/watches';
import { motion } from 'framer-motion';

const categoryNames = {
    classic: 'Classic Watches',
    luxury: 'Luxury Watches',
    leather: 'Leather Watches',
    sports: 'Sports Watches',
    kids: 'Kids Watches',
    metal: 'Metal Watches',
    men: 'Men\'s Watches',
    women: 'Women\'s Watches',
    mens: 'Men\'s Watches',
    womens: 'Women\'s Watches',
    bestsellers: 'Bestsellers Collection',
    'new-arrivals': 'New Arrivals',
    automatic: 'Automatic Watches',
    all: 'All Watches',
};

export default function CategoryPage() {
    const params = useParams();
    const categoryId = params.categoryId;
    const watches = getWatchesByCategory(categoryId);
    const categoryName = categoryNames[categoryId] || categoryId.charAt(0).toUpperCase() + categoryId.slice(1) + ' Watches';

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Category Header */}
            <div className="bg-white border-b border-gray-200 pt-24 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            {categoryName}
                        </h1>
                        <p className="text-gray-600">
                            {watches.length} {watches.length === 1 ? 'watch' : 'watches'} available
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {watches.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {watches.map((watch, index) => (
                            <ProductCard key={watch.id} watch={watch} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No watches found in this category.</p>
                        <a
                            href="/"
                            className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium"
                        >
                            ← Back to Home
                        </a>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}


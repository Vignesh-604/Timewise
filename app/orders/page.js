'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/data/watches';
import { getWatchImage } from '@/lib/imageHelper';
import { ShoppingBag, Calendar, Package } from 'lucide-react';
import { motion } from 'framer-motion';

import { useRouter } from 'next/navigation';
import { useNavigation } from '@/contexts/NavigationContext';

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user, isAuthLoading } = useNavigation();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthLoading && !user) {
            router.push('/login');
            return;
        }

        const fetchOrders = async () => {
            if (!user) return; // Wait for user to be loaded

            try {
                const res = await fetch('/api/orders');
                const data = await res.json();
                if (data.success) {
                    setOrders(data.orders);
                }
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (!isAuthLoading) {
            fetchOrders();
        }
    }, [user, isAuthLoading, router]);

    if (isAuthLoading || !user) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-24 pb-12 max-w-7xl mx-auto px-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <Package className="w-8 h-8 text-amber-500" />
                    My Orders
                </h1>

                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
                    </div>
                ) : orders.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-6">
                            <ShoppingBag className="w-10 h-10" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">No orders yet</h2>
                        <p className="text-gray-500 mb-8">Looks like you haven't placed any orders yet.</p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-500/30 transition-all"
                        >
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order, index) => (
                            <motion.div
                                key={order._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
                            >
                                <div className="bg-gray-50 px-6 py-4 flex flex-wrap gap-4 justify-between items-center border-b border-gray-100">
                                    <div className="flex gap-6 text-sm">
                                        <div>
                                            <p className="text-gray-500 mb-1">Order Date</p>
                                            <p className="font-medium text-gray-900 flex items-center gap-1">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                {new Date(order.createdAt).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 mb-1">Order ID</p>
                                            <p className="font-medium text-gray-900">#{order._id.slice(-8).toUpperCase()}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 mb-1">Total Amount</p>
                                            <p className="font-bold text-gray-900">{formatPrice(order.totalAmount)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                            Pre-order Confirmed
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="space-y-6">
                                        {order.items.map((item) => (
                                            <div key={item.id} className="flex gap-4">
                                                <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden border shrink-0">
                                                    <Image
                                                        src={getWatchImage(item.id, item.image)}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                                    <p className="text-sm font-medium text-amber-600 mt-1">{formatPrice(item.price)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}

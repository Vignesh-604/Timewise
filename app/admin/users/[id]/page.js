'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Package, User, MapPin, Phone, Mail, Calendar, CreditCard, ShoppingBag, Clock, CheckCircle, XCircle } from 'lucide-react';
import Image from 'next/image';
import { formatPrice } from '@/data/watches';

export default function UserDetailPage({ params }) {
    const [unwrappedParams, setUnwrappedParams] = useState(null);
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Unwrap params in Next.js 15
        const unwrap = async () => {
            const resolvedParams = await params;
            setUnwrappedParams(resolvedParams);
        };
        unwrap();
    }, [params]);

    useEffect(() => {
        if (!unwrappedParams) return;

        const fetchUserDetails = async () => {
            try {
                const res = await fetch(`/api/admin/users/${unwrappedParams.id}`);
                const data = await res.json();
                if (data.success) {
                    setUser(data.user);
                    setOrders(data.orders);
                }
            } catch (error) {
                console.error('Failed to fetch user details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, [unwrappedParams]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
                <p className="text-gray-500">User not found</p>
                <button
                    onClick={() => router.push('/admin?page=users')}
                    className="text-amber-600 hover:text-amber-700 font-medium"
                >
                    Back to Users
                </button>
            </div>
        );
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-700';
            case 'cancelled': return 'bg-red-100 text-red-700';
            default: return 'bg-yellow-100 text-yellow-700';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-8">
            <div className="max-w-6xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push('/admin?page=users')}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">User Details</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* User Profile Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-abmer-700 text-3xl font-bold mb-4">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
                            <p className="text-sm text-gray-500">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Mail className="w-5 h-5 text-gray-400" />
                                <span>{user.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Phone className="w-5 h-5 text-gray-400" />
                                <span>{user.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <User className="w-5 h-5 text-gray-400" />
                                <span>Age: {user.age}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <MapPin className="w-5 h-5 text-gray-400" />
                                <span>{user.city}</span>
                            </div>
                        </div>
                    </div>

                    {/* Orders & Cart Section */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Order History */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                    <ShoppingBag className="w-5 h-5 text-amber-500" />
                                    Order History ({orders.length})
                                </h3>
                            </div>

                            {orders.length > 0 ? (
                                <div className="divide-y divide-gray-100">
                                    {orders.map((order) => (
                                        <div key={order._id} className="p-6 hover:bg-gray-50 transition-colors">
                                            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                                <div>
                                                    <p className="font-medium text-gray-900">Order #{order._id.slice(-6)}</p>
                                                    <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()} at {new Date(order.createdAt).toLocaleTimeString()}</p>
                                                </div>
                                                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                                    {order.status.toUpperCase()}
                                                </div>
                                            </div>

                                            <div className="space-y-3 mb-4">
                                                {order.items.map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        <div className="relative w-12 h-12 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                                            <Image
                                                                src={item.image || 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400'}
                                                                alt={item.name}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</p>
                                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                                        </div>
                                                        <p className="text-sm font-medium text-gray-900">{formatPrice(item.price)}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                                <p className="text-sm text-gray-600">Total Amount</p>
                                                <p className="text-lg font-bold text-gray-900">{formatPrice(order.totalAmount)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-12 text-center text-gray-500">
                                    <ShoppingBag className="w-8 h-8 mx-auto mb-3 text-gray-300" />
                                    <p>No orders found for this user.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

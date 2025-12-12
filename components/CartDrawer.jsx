'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useNavigation } from '@/contexts/NavigationContext';
import Image from 'next/image';
import { getWatchImage } from '@/lib/imageHelper';
import { formatPrice } from '@/data/watches';
import { useState } from 'react';

import PreOrderModal from './PreOrderModal';

export default function CartDrawer() {
    const {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal,
        clearCart,
        trackEvent
    } = useCart();
    const { user, openAuthModal } = useNavigation();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isPreOrderModalOpen, setIsPreOrderModalOpen] = useState(false);

    const handlePreOrderClick = () => {
        if (!user) {
            setIsCartOpen(false);
            openAuthModal();
            return;
        }
        setIsPreOrderModalOpen(true);
    };

    const handleConfirmPreOrder = async () => {
        setIsCheckingOut(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Create Order via API
        try {
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: cartItems.map(item => ({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        quantity: item.quantity
                    })),
                    totalAmount: cartTotal
                })
            });

            if (!res.ok) throw new Error('Failed to create order');

            const data = await res.json();
            const newOrderId = data.order._id;

            // Track Conversion Event
            await trackEvent('pre_order', {
                orderId: newOrderId,
                totalAmount: cartTotal,
                itemCount: cartItems.length,
                items: cartItems.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                }))
            });

            setIsCheckingOut(false);
            setIsPreOrderModalOpen(false);
            setShowSuccess(true);
        } catch (error) {
            console.error('Order creation failed:', error);
            setIsCheckingOut(false);
            // Optionally show error toast here using toast.error('Check failed')
        }

        // Clear cart after showing success
        setTimeout(() => {
            clearCart();
            setShowSuccess(false);
            setIsCartOpen(false);
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="cart-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        key="cart-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b flex items-center justify-between bg-white z-10">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5" />
                                Your Cart
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {showSuccess ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4"
                                    >
                                        <CheckCircle className="w-10 h-10" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900">Pre-order Placed!</h3>
                                    <p className="text-gray-500 max-w-xs">
                                        Thank you for your interest. We'll be in touch shortly to finalize your order.
                                    </p>
                                </div>
                            ) : cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-2">
                                        <ShoppingBag className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Your cart is empty</h3>
                                    <p className="text-gray-500">Looks like you haven't added any watches yet.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors mt-4"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {cartItems.map((item, index) => (
                                        <motion.div
                                            layout
                                            key={`${item.id || 'item'}-${index}`}
                                            className="flex gap-4 p-4 border rounded-xl bg-gray-50"
                                        >
                                            <div className="relative w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0 border">
                                                <Image
                                                    src={getWatchImage(item.id, item.image)}
                                                    alt={item.name}
                                                    fill
                                                    sizes="80px"
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">{item.brand}</p>
                                                </div>
                                                <div className="flex items-center justify-between mt-2">
                                                    <span className="font-bold text-amber-600">{formatPrice(item.price)}</span>

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-3 bg-white border rounded-full px-2 py-1 shadow-sm">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-1 hover:text-amber-600 transition-colors"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </button>
                                                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-1 hover:text-amber-600 transition-colors"
                                                            disabled={item.quantity >= 3}
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {!showSuccess && cartItems.length > 0 && (
                            <div className="border-t p-6 bg-gray-50 z-10">
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>{formatPrice(cartTotal)}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>{formatPrice(cartTotal)}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={handlePreOrderClick}
                                    disabled={isCheckingOut}
                                    className="w-full py-4 bg-amber-500 text-white rounded-xl font-bold text-lg hover:bg-amber-600 active:bg-amber-700 transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isCheckingOut ? (
                                        'Processing...'
                                    ) : (
                                        <>
                                            Place Pre-order <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    By placing a pre-order, you are expressing interest to purchase. No payment is taken today.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
            <PreOrderModal
                isOpen={isPreOrderModalOpen}
                onClose={() => setIsPreOrderModalOpen(false)}
                onConfirm={handleConfirmPreOrder}
                cartItems={cartItems}
                total={cartTotal}
                isLoading={isCheckingOut}
            />
        </AnimatePresence>
    );
}

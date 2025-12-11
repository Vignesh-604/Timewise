'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, FileText } from 'lucide-react';
import { formatPrice } from '@/data/watches';

export default function PreOrderModal({ isOpen, onClose, onConfirm, cartItems, total, isLoading }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black bg-opacity-50"
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-900">
                            <FileText className="w-5 h-5 text-amber-500" />
                            <h2 className="text-lg font-bold">Order Summary</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto mb-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0">
                                    <div>
                                        <p className="font-semibold text-gray-900">{item.name}</p>
                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-gray-900">{formatPrice(item.price * item.quantity)}</p>
                                        <p className="text-xs text-gray-400">{formatPrice(item.price)} each</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bill Details */}
                        <div className="bg-gray-50 rounded-xl p-4 space-y-2 mb-6">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Subtotal</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Taxes (Included)</span>
                                <span>₹0</span>
                            </div>
                            <div className="border-t border-gray-200 my-2 pt-2 flex justify-between text-lg font-bold text-gray-900">
                                <span>Total Amount</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 px-4 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onConfirm}
                                disabled={isLoading}
                                className="flex-1 py-3 px-4 bg-amber-500 text-white rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    'Processing...'
                                ) : (
                                    <>
                                        <Check className="w-5 h-5" />
                                        Confirm Pre-order
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

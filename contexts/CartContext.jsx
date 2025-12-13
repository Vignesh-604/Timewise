'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const CART_STORAGE_KEY = 'timewise_cart_v2'; // Changed key to force reset old data

    // Load cart from local storage on mount
    useEffect(() => {
        const storedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (storedCart) {
            try {
                const parsed = JSON.parse(storedCart);
                // Additional safety check: Ensure it's an array and filter out invalid items
                if (Array.isArray(parsed)) {
                    // Filter out items without IDs to be extra safe
                    const validItems = parsed.filter(item => item && item.id);
                    setCartItems(validItems);
                } else {
                    // Reset if structure is invalid
                    setCartItems([]);
                }
            } catch (e) {
                console.error('Failed to parse cart', e);
                setCartItems([]);
            }
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    const trackEvent = async (eventName, eventData) => {
        try {
            // Get session ID for context (though API handles it mainly via session storage or cookie logic if setup, 
            // but here we just send the event. The API route we updated handles identifying the session from the request logic/cookies if we passed them, 
            // OR we need to pass sessionId if the client stores it. 
            // Looking at useTrackVisit.js, it sends sessionId explicitly. We should do the same.)

            const sessionId = sessionStorage.getItem('timewise_session');
            if (!sessionId) return; // Should exist if visited

            await fetch('/api/analytics/track', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sessionId,
                    event: {
                        name: eventName,
                        data: eventData
                    }
                }),
            });
        } catch (error) {
            console.error('Analytics event error:', error);
        }
    };

    const addToCart = (product, quantity = 1) => {
        // Check limit using current state
        const existing = cartItems.find((item) => item.id === product.id);
        const currentQty = existing ? existing.quantity : 0;

        if (currentQty + quantity > 3) {
            toast.error(`You can only have up to 3 of this item. You already have ${currentQty}.`);
            return;
        }

        // Update state
        setCartItems((prev) => {
            const existingInPrev = prev.find((item) => item.id === product.id);
            if (existingInPrev) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prev, { ...product, quantity: quantity }];
            }
        });

        // Side effects
        trackEvent('add_to_cart', {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });
        toast.success('Added to cart');
        setIsCartOpen(true);
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }
        if (newQuantity > 3) {
            toast.error('Maximum limit is 3 items.');
            return;
        }
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem(CART_STORAGE_KEY);
    };

    const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const cartOriginalTotal = cartItems.reduce((total, item) => total + (item.originalPrice || item.price) * item.quantity, 0);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartOriginalTotal,
            cartCount,
            isCartOpen,
            setIsCartOpen,
            trackEvent
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

import { create } from 'zustand';
import { Book } from '../types';
import { api } from '../http/api';

interface CartItem extends Book {
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    error: string | null;
    isLoading: boolean;
    fetchCart: () => Promise<void>;
    addToCart: (bookId: string, quantity: number) => Promise<void>;
    removeFromCart: (bookId: string) => Promise<void>;
    updateCartItem: (bookId: string, quantity: number) => Promise<void>;
    clearCart: () => Promise<void>;
    getCartTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],
    error: null,
    isLoading: false,
    fetchCart: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await api.get('/cart');
            set({ cart: response.data.items || [], isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch cart', isLoading: false });
        }
    },
    addToCart: async (bookId: string, quantity: number) => {
        set({ isLoading: true, error: null });
        try {
            const response = await api.post('/cart', { bookId, quantity });
            set({ cart: response.data.items, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to add to cart', isLoading: false });
        }
    },
    removeFromCart: async (bookId: string) => {
        set({ isLoading: true, error: null });
        try {
            const response = await api.delete(`/cart/items/${bookId}`);
            set({ cart: response.data.items, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to remove from cart', isLoading: false });
        }
    },
    updateCartItem: async (bookId: string, quantity: number) => {
        set({ isLoading: true, error: null });
        try {
            const response = await api.put(`/cart/items/${bookId}`, { quantity });
            set({ cart: response.data.items, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to update cart item', isLoading: false });
        }
    },
    clearCart: async () => {
        set({ isLoading: true, error: null });
        try {
            await api.delete('/cart/clear');
            set({ cart: [], isLoading: false });
        } catch (error) {
            set({ error: 'Failed to clear cart', isLoading: false });
        }
    },
    getCartTotal: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
    },
}));

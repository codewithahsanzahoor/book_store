import { create } from 'zustand';
import { api } from '../http/api';

interface User {
    _id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    fetchUserProfile: () => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
    fetchUserProfile: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await api.get<User>('/users/profile');
            set({ user: response.data, isAuthenticated: true, isLoading: false });
        } catch (error) {
            set({ user: null, isAuthenticated: false, isLoading: false, error: 'Failed to fetch user profile' });
        }
    },
    logout: () => {
        // This would ideally also call a backend endpoint to invalidate the cookie
        set({ user: null, isAuthenticated: false });
    },
}));
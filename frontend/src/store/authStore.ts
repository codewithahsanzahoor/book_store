import { create } from 'zustand';
import { api } from '../http/api';
import { LoginData, RegisterData } from '../types';

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
    isInitialized: boolean;
    fetchUserProfile: () => Promise<void>;
    logout: () => Promise<void>;
    login: (data: LoginData) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    isInitialized: false,
    fetchUserProfile: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await api.get<User>('/users/profile');
            set({ user: response.data, isAuthenticated: true, isLoading: false, isInitialized: true });
        } catch (error) {
            set({ user: null, isAuthenticated: false, isLoading: false, error: 'Failed to fetch user profile', isInitialized: true });
        }
    },
    logout: async () => {
        try {
            await api.post('/users/logout');
            set({ user: null, isAuthenticated: false });
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    },
    login: async (data: LoginData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await api.post("/users/login", data);
            // Assuming the login response returns the user object
            set({ user: response.data.user, isAuthenticated: true, isLoading: false });
        } catch (error) {
            set({ user: null, isAuthenticated: false, isLoading: false, error: 'Failed to login' });
            throw error;
        }
    },
    register: async (data: RegisterData) => {
        set({ isLoading: true, error: null });
        try {
            const response = await api.post("/users/register", data);
            // Assuming the register response returns the user object
            set({ user: response.data.user, isAuthenticated: true, isLoading: false });
        } catch (error) {
            set({ user: null, isAuthenticated: false, isLoading: false, error: 'Failed to register' });
            throw error;
        }
    },
}));
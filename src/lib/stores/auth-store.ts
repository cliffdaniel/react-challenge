import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
    token: string | null;
    user: string | null;
    login: (token: string, user: string) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            user: null,
            login: (token, user) => set({ token, user }),
            logout: () => set({ token: null, user: null }),
        }),
        {
            name: 'auth',
            storage: {
                getItem: (key) => {
                    const value = sessionStorage.getItem(key);
                    return value ? JSON.parse(value) : null;
                },
                setItem: (key, value) => {
                    sessionStorage.setItem(key, JSON.stringify(value));
                },
                removeItem: (key) => {
                    sessionStorage.removeItem(key);
                },
            },
        },
    ),
);

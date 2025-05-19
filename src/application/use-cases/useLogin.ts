import { useAuthStore } from '@/lib/stores/auth-store';

export const useLogin = () => {
    const loginToStore = useAuthStore((state) => state.login);

    const login = async (email: string, password: string): Promise<boolean> => {
        await new Promise((r) => setTimeout(r, 800));

        if (email === 'admin@email.com' && password === '123456') {
            loginToStore('fake-token', 'Admin');
            return true;
        }

        return false;
    };

    return { login };
};

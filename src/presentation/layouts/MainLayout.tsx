import { useAuthStore } from '@/lib/stores/auth-store';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const logout = useAuthStore((state) => state.logout);
    const user = useAuthStore((state) => state.user);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <main className="min-h-screen flex flex-col items-center">
            <header className="w-full bg-white border-b shadow-sm py-4 px-6 flex items-center justify-between">
                <span className="text-sm text-gray-600">{user ? `Hello, ${user}` : ''}</span>
                <Button variant="outline" onClick={handleLogout}>
                    Logout
                </Button>
            </header>

            <div className="w-full max-w-[1400px] px-4 py-6">{children}</div>
        </main>
    );
};

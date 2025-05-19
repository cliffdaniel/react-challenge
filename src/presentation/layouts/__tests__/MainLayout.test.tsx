import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MainLayout } from '../MainLayout';
import { BrowserRouter } from 'react-router-dom';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual: typeof import('react-router-dom') = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

const mockLogout = vi.fn();

vi.mock('@/lib/stores/auth-store', () => ({
    useAuthStore: (selector: any) => selector({ logout: mockLogout, user: 'Daniel' }),
}));

describe('MainLayout', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders user name and logout button', () => {
        render(
            <BrowserRouter>
                <MainLayout>
                    <div>Contenido</div>
                </MainLayout>
            </BrowserRouter>,
        );

        expect(screen.getByText('Hello, Daniel')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
        expect(screen.getByText('Contenido')).toBeInTheDocument();
    });

    it('calls logout and navigates on logout button click', () => {
        render(
            <BrowserRouter>
                <MainLayout>
                    <div>Contenido</div>
                </MainLayout>
            </BrowserRouter>,
        );

        fireEvent.click(screen.getByText('Logout'));

        expect(mockLogout).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
});

import { Routes, Route, Navigate } from 'react-router-dom';
import { ListPage } from '@/presentation/pages/ListPage';
import { CountryDetailPage } from '@/presentation/pages/CountryDetailPage';
import { LoginPage } from '@/presentation/pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <ListPage />
                    </PrivateRoute>
                }
            />
            <Route
                path="/country/:code"
                element={
                    <PrivateRoute>
                        <CountryDetailPage />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

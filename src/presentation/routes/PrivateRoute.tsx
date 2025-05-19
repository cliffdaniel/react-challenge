import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/lib/stores/auth-store';

type PrivateRouteProps = {
    children: JSX.Element;
};

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const token = useAuthStore((state) => state.token);
    return token ? children : <Navigate to="/login" replace />;
};

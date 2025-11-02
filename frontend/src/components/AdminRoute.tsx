import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const AdminRoute = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading, fetchUserProfile } = useAuthStore();

    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            fetchUserProfile();
        }
    }, [isAuthenticated, isLoading, fetchUserProfile]);

    useEffect(() => {
        if (!isLoading) {
            if (!isAuthenticated || user?.role !== 'admin') {
                navigate('/login');
            }
        }
    }, [isLoading, isAuthenticated, user, navigate]);

    if (isLoading) {
        return <div>Loading...</div>; // Or a spinner component
    }

    if (isAuthenticated && user?.role === 'admin') {
        return <Outlet />;
    }

    return null; // Or a redirect component
};

export default AdminRoute;
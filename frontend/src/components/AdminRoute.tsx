import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const AdminRoute = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading, fetchUserProfile, isInitialized } = useAuthStore();

    useEffect(() => {
        if (!isInitialized) {
            fetchUserProfile();
        }
    }, [isInitialized, fetchUserProfile]);

    useEffect(() => {
        if (isInitialized && (!isAuthenticated || user?.role !== 'admin')) {
            navigate('/login');
        }
    }, [isInitialized, isAuthenticated, user, navigate]);

    if (isLoading || !isInitialized) {
        return <div>Loading...</div>; // Or a spinner component
    }

    if (isAuthenticated && user?.role === 'admin') {
        return <Outlet />;
    }

    return null; // Or a redirect component
};

export default AdminRoute;
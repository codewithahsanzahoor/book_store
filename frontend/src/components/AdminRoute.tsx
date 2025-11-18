import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const AdminRoute = () => {
	const navigate = useNavigate();
	const {
		user,
		isAuthenticated,
		isLoading,
		fetchUserProfile,
		isInitialized,
	} = useAuthStore();

	useEffect(() => {
		if (!isInitialized) {
			fetchUserProfile();
		} else if (!isLoading) {
			if (!isAuthenticated || user?.role !== "admin") {
				navigate("/login");
			}
		}
	}, [
		isInitialized,
		isAuthenticated,
		user,
		isLoading,
		navigate,
		fetchUserProfile,
	]);

	if (
		isLoading ||
		!isInitialized ||
		!isAuthenticated ||
		user?.role !== "admin"
	) {
		return <div>Loading...</div>; // Or a spinner component
	}

	return <Outlet />;
};

export default AdminRoute;

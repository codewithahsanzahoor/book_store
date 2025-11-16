import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

function PublicLayout() {
	const { fetchUserProfile, isInitialized } = useAuthStore();
	useEffect(() => {
		if (!isInitialized) {
			fetchUserProfile();
		}
	}, [fetchUserProfile, isInitialized]);
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default PublicLayout;

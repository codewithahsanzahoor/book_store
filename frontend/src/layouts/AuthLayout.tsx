import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AuthLayout() {
	const navigate = useNavigate();

	useEffect(() => {
		//NOTE: check if user is logged in through token, but here we are not verifying the token because our server api routes are secured using middleware
		const token = localStorage.getItem("token");
		if (token) {
			navigate("/dashboard/home");
		}
	}, [navigate]);

	return (
		<>
			<Outlet />
		</>
	);
}

export default AuthLayout;

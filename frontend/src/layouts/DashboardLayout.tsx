import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function DashboardLayout() {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	useEffect(() => {
		//NOTE: check if user is logged in through token, but here we are not verifying the token because our server api routes are secured using middleware
		if (!token) {
			navigate("/auth/login");
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/auth/login");
	};
	return (
		<div>
			{/* //! navbar */}
			<div id="navbar" className="border-b border-base-300">
				<div className="navbar bg-base-100">
					<div className="flex-1">
						<a className="btn btn-ghost text-xl">Coder's Books</a>
					</div>
					<div className="flex-none gap-2">
						<div className="form-control">
							<input
								type="text"
								placeholder="Search"
								className="input input-bordered w-24 md:w-auto"
							/>
						</div>
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img
										alt="Tailwind CSS Navbar component"
										src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									/>
								</div>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
							>
								<li>
									<a className="justify-between">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a onClick={handleLogout}>Logout</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* //! dashboard */}
			<div id="dashboard" className="grid grid-cols-12 gap-1">
				{/* //! sidebar */}
				<div className="hidden sm:block sm:col-span-2  h-[calc(100vh-0.2rem)] bg-base-200 ">
					<h1 className="text-2xl font-bold text-center my-3">Coder's Books</h1>
					<div className="divider my-0 mx-0"></div>
					<ul className="menu bg-base-200 w-full gap-5 mt-[15px]">
						<li>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
								<Link to="/dashboard">Home</Link>
							</div>
						</li>
						<li>
							<div>
								<i className="ri-git-repository-fill"></i>{" "}
								<Link to="/dashboard/books">Books</Link>
							</div>
						</li>
						<li>
							<div>
								<i className="ri-add-box-fill"></i>{" "}
								<Link to="/dashboard/books/create">Create Book</Link>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-span-12 sm:col-span-9  h-[calc(100vh-5rem)]">
					{/* //! dynamic content */}
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default DashboardLayout;

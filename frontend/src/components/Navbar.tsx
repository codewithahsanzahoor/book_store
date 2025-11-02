import { Link } from "react-router-dom";

function Navbar() {
    const isLoggedIn = false; // Placeholder for authentication status

    return (
        <nav className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">The Book Nook</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/browse">Browse Books</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">0</span>
                        </div>
                    </label>
                </div>
                {isLoggedIn ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User Avatar" src="https://picsum.photos/200" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/profile">My Profile</Link></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                ) : (
                    <Link to="/login" className="btn btn-primary ml-2">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;

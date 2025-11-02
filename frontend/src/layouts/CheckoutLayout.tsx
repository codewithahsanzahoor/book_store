import { Outlet, Link } from "react-router-dom";

function CheckoutLayout() {
    return (
        <div className="bg-base-200 min-h-screen flex flex-col">
            <header className="bg-base-100 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="btn btn-ghost text-xl">The Book Nook</Link>
                    <h2 className="text-lg font-semibold">Secure Checkout</h2>
                </div>
            </header>
            
            <main className="flex-grow">
                <Outlet />
            </main>

            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2025 - All right reserved by The Book Nook</p>
                    <div className="flex gap-4">
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                    </div>
                </aside>
            </footer>
        </div>
    );
}

export default CheckoutLayout;

import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
            <p className="text-lg mb-8">Here you can manage your books, orders, and users.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Total Books</h2>
                        <p className="text-4xl font-bold">1,234</p>
                        <div className="card-actions justify-end">
                            <Link to="/dashboard/books" className="btn btn-primary">Manage Books</Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Total Orders</h2>
                        <p className="text-4xl font-bold">567</p>
                        <div className="card-actions justify-end">
                            <Link to="/dashboard/orders" className="btn btn-primary">Manage Orders</Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Total Users</h2>
                        <p className="text-4xl font-bold">890</p>
                        <div className="card-actions justify-end">
                            <Link to="/dashboard/users" className="btn btn-primary">Manage Users</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
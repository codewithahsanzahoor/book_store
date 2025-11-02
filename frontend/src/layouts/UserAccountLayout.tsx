import { Outlet, NavLink } from "react-router-dom";

const activeLinkStyle = {
    backgroundColor: 'hsl(var(--p))',
    color: 'hsl(var(--pc))',
};

function UserAccountLayout() {
    return (
        <div className="bg-base-200">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="md:col-span-1">
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body p-4">
                                <ul className="menu rounded-box">
                                    <li>
                                        <NavLink 
                                            to="/profile" 
                                            end
                                            style={({ isActive }) => isActive ? activeLinkStyle : {}}
                                        >
                                            My Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/profile/orders" 
                                            style={({ isActive }) => isActive ? activeLinkStyle : {}}
                                        >
                                            My Orders
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Page Content */}
                    <div className="md:col-span-3">
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAccountLayout;

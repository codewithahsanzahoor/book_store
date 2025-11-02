import { useQuery } from "react-query";
import { getOrders } from "../http/api";

function OrdersPage() {
    const { data: orders, isLoading, isError } = useQuery("orders", getOrders);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching orders.</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-8">Manage Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Books</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.user.name} ({order.user.email})</td>
                                <td>{order.books.length}</td>
                                <td>${order.totalAmount.toFixed(2)}</td>
                                <td>
                                    <span className={`badge ${order.status === 'completed' ? 'badge-success' : order.status === 'pending' ? 'badge-warning' : 'badge-error'}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrdersPage;
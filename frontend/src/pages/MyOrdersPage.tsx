import { useQuery } from "react-query";
import { getMyOrders } from "../http/api";
import { Order } from "../types";
import { Link } from "react-router-dom";

const MyOrdersPage = () => {
    const { data: orders, isLoading } = useQuery<Order[]>({
        queryKey: ["myOrders"],
        queryFn: getMyOrders,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="text-3xl font-bold font-serif mb-6">My Orders</h2>
            <div className="space-y-4">
                {orders?.length === 0 && (
                    <div className="text-center">
                        <p className="text-lg">You have no orders yet.</p>
                        <Link to="/browse" className="btn btn-primary mt-4">
                            Browse Books
                        </Link>
                    </div>
                )}
                {orders?.map((order) => (
                    <div
                        key={order._id}
                        className="p-4 border rounded-lg shadow-sm"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <p className="font-semibold">
                                    Order ID: {order._id}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Placed on:{" "}
                                    {new Date(
                                        order.createdAt
                                    ).toLocaleDateString()}
                                </p>
                            </div>
                            <div>
                                <p
                                    className={`badge ${
                                        order.status === "pending"
                                            ? "badge-warning"
                                            : "badge-success"
                                    }`}
                                >
                                    {order.status}
                                </p>
                            </div>
                        </div>
                        <div>
                            {order.items.map((item) => (
                                <div
                                    key={item.book._id}
                                    className="flex items-center gap-4 mb-2"
                                >
                                    <img
                                        src={item.book.coverImage}
                                        alt={item.book.title}
                                        className="w-16 h-20 object-cover rounded"
                                    />
                                    <div>
                                        <p className="font-semibold">
                                            {item.book.title}
                                        </p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>
                                            Price: ${item.book.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-right font-bold text-lg mt-4">
                            Total: ${order.totalAmount.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrdersPage;

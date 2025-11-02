import { Link } from "react-router-dom";

// Placeholder data
const cartItems = [
    {
        id: '1',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        cover: 'https://images.unsplash.com/photo-1603831910523-5528463a04e4?q=80&w=1974&auto=format&fit=crop',
        price: 14.99,
        quantity: 1,
    },
    {
        id: '2',
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        cover: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1912&auto=format&fit=crop',
        price: 18.50,
        quantity: 2,
    },
];

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

function CartPage() {
    return (
        <div className="bg-base-200">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold font-serif">Your Shopping Cart</h1>
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p className="text-lg">Your cart is empty.</p>
                        <Link to="/browse" className="btn btn-primary mt-4">Continue Shopping</Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items Table */}
                        <div className="lg:col-span-2">
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map(item => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={item.cover} alt={`Cover of ${item.title}`} />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{item.title}</div>
                                                            <div className="text-sm opacity-50">{item.author}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>${item.price.toFixed(2)}</td>
                                                <td>
                                                    <input type="number" className="input input-bordered w-20" defaultValue={item.quantity} />
                                                </td>
                                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                                <td>
                                                    <button className="btn btn-ghost btn-xs">Remove</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="card bg-base-100 shadow-lg">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">Order Summary</h2>
                                    <div className="flex justify-between mt-4">
                                        <p>Subtotal</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg mt-2">
                                        <p>Grand Total</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <div className="card-actions mt-6">
                                        <Link to="/checkout" className="btn btn-primary w-full">Proceed to Checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;

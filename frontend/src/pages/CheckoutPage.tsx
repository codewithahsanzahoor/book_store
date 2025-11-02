import { Link } from "react-router-dom";

// Placeholder data
const cartItems = [
    { id: '1', title: 'The Midnight Library', price: 14.99, quantity: 1 },
    { id: '2', title: 'Project Hail Mary', price: 18.50, quantity: 2 },
];
const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

function CheckoutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Checkout Forms */}
                <div className="lg:col-span-2">
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            {/* Shipping Information */}
                            <h2 className="card-title text-2xl mb-4">Shipping Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                                <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                                <input type="email" placeholder="Email Address" className="input input-bordered w-full md:col-span-2" />
                                <input type="text" placeholder="Address" className="input input-bordered w-full md:col-span-2" />
                                <input type="text" placeholder="City" className="input input-bordered w-full" />
                                <input type="text" placeholder="State / Province" className="input input-bordered w-full" />
                                <input type="text" placeholder="Zip / Postal Code" className="input input-bordered w-full" />
                            </div>

                            {/* Payment Details */}
                            <h2 className="card-title text-2xl mt-8 mb-4">Payment Details</h2>
                            <div className="grid grid-cols-1 gap-4">
                                <input type="text" placeholder="Card Number" className="input input-bordered w-full" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="MM / YY" className="input input-bordered w-full" />
                                    <input type="text" placeholder="CVC" className="input input-bordered w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="card bg-base-100 shadow-lg sticky top-24">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Order Summary</h2>
                            <ul className="space-y-2 mt-4">
                                {cartItems.map(item => (
                                    <li key={item.id} className="flex justify-between">
                                        <span>{item.title} (x{item.quantity})</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="divider"></div>
                            <div className="flex justify-between font-bold text-lg">
                                <p>Grand Total</p>
                                <p>${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="card-actions mt-6">
                                <Link to="/order-confirmation" className="btn btn-primary w-full">Place Your Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;

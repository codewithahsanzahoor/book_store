import { Link } from "react-router-dom";

function OrderConfirmationPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="card bg-base-100 shadow-lg max-w-2xl mx-auto">
                <div className="card-body items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="card-title text-4xl font-bold font-serif mt-4">Thank You For Your Order!</h1>
                    <p className="mt-2">Your order has been placed successfully.</p>
                    <p>Your order number is <span className="font-bold">#123456789</span>.</p>
                    <p>An email confirmation has been sent to your address.</p>
                    <p className="mt-4">Estimated delivery: <span className="font-semibold">October 28, 2025</span></p>
                    <div className="card-actions mt-6">
                        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmationPage;

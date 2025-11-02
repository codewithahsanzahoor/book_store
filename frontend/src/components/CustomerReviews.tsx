function CustomerReviews() {
    const isLoggedIn = true; // Placeholder

    return (
        <div className="mt-16">
            <h3 className="text-3xl font-bold font-serif mb-6">What Readers Are Saying</h3>
            
            {/* Existing Reviews */}
            <div className="space-y-6">
                <div className="p-4 border rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" disabled defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" disabled defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" disabled defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" disabled defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" disabled />
                        </div>
                        <p className="ml-2 font-semibold">Jane Doe</p>
                    </div>
                    <p>A truly captivating read! I couldn't put it down. The characters felt so real and the plot was masterfully woven.</p>
                </div>
                <div className="p-4 border rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" disabled defaultChecked />
                        </div>
                        <p className="ml-2 font-semibold">John Smith</p>
                    </div>
                    <p>An absolute masterpiece. This book will stay with me for a long time. Highly recommended!</p>
                </div>
            </div>

            {/* Write a Review Form */}
            {isLoggedIn && (
                <div className="mt-10">
                    <h4 className="text-2xl font-bold font-serif mb-4">Write a Review</h4>
                    <form className="space-y-4">
                        <div className="rating rating-lg">
                            <input type="radio" name="rating-new" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-new" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-new" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-new" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-new" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Share your thoughts..."></textarea>
                        <button className="btn btn-primary">Submit Review</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CustomerReviews;

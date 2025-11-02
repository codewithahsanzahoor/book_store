import { useParams } from "react-router-dom";
import CustomerReviews from "../components/CustomerReviews";
import RelatedBooks from "../components/RelatedBooks";

// Placeholder data
const book = {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1603831910523-5528463a04e4?q=80&w=1974&auto=format&fit=crop',
    price: 14.99,
    synopsis: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets? A novel about all the choices that go into a life well lived."
};

function BookDetailsPage() {
    const { id } = useParams<{ id: string }>();

    // In a real app, you would use the `id` to fetch book data from an API

    return (
        <div className="bg-base-200">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Book Cover */}
                    <div>
                        <img src={book.cover} alt={`Cover of ${book.title}`} className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                    </div>

                    {/* Right Column: Book Info */}
                    <div>
                        <h1 className="text-4xl font-bold font-serif mb-2">{book.title}</h1>
                        <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
                        <p className="text-3xl font-bold text-primary mb-6">${book.price.toFixed(2)}</p>
                        
                        <div className="flex items-center mb-6">
                            <label className="mr-4">Quantity:</label>
                            <div className="join">
                                <button className="join-item btn">-</button>
                                <input className="join-item btn" type="number" defaultValue={1} style={{ width: '4rem'}} />
                                <button className="join-item btn">+</button>
                            </div>
                        </div>

                        <button className="btn btn-primary btn-lg w-full">Add to Cart</button>

                        <div className="mt-8">
                            <h3 className="text-2xl font-bold font-serif mb-2">Synopsis</h3>
                            <p className="text-base leading-relaxed">{book.synopsis}</p>
                        </div>
                    </div>
                </div>

                {/* Customer Reviews Section */}
                <CustomerReviews />
            </div>
            
            {/* Related Books Section */}
            <RelatedBooks />
        </div>
    );
}

export default BookDetailsPage;

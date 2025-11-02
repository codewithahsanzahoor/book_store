import FilterSidebar from "../components/FilterSidebar";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";

// Placeholder data - in a real app, this would come from an API
const books = [
    { id: '1', title: 'The Midnight Library', author: 'Matt Haig', cover: 'https://images.unsplash.com/photo-1603831910523-5528463a04e4?q=80&w=1974&auto=format&fit=crop', price: 14.99 },
    { id: '2', title: 'Project Hail Mary', author: 'Andy Weir', cover: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1912&auto=format&fit=crop', price: 18.50 },
    { id: '3', title: 'Klara and the Sun', author: 'Kazuo Ishiguro', cover: 'https://images.unsplash.com/photo-1622359935345-b7c242a3341f?q=80&w=1964&auto=format&fit=crop', price: 16.00 },
    { id: '4', title: 'The Four Winds', author: 'Kristin Hannah', cover: 'https://images.unsplash.com/photo-1586153269345-65a63a9335aa?q=80&w=1974&auto=format&fit=crop', price: 22.99 },
    { id: '5', title: 'Crying in H Mart', author: 'Michelle Zauner', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop', price: 15.99 },
    { id: '6', title: 'The Hill We Climb', author: 'Amanda Gorman', cover: 'https://images.unsplash.com/photo-1618665817519-e054382417e2?q=80&w=1974&auto=format&fit=crop', price: 12.99 },
];

function BrowseBooksPage() {
    return (
        <div className="bg-base-200">
            <div className="container mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold font-serif">Our Collection</h1>
                    <p className="text-lg">Home &gt; Browse Books</p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <FilterSidebar />
                    </div>

                    {/* Book Grid */}
                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {books.map(book => (
                                <BookCard 
                                    key={book.id}
                                    id={book.id}
                                    title={book.title}
                                    author={book.author}
                                    cover={book.cover}
                                    price={book.price}
                                />
                            ))}
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowseBooksPage;

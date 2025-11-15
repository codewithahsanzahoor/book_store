import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBooks } from "../http/api";
import FilterSidebar from "../components/FilterSidebar";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";

function BrowseBooksPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const { data: books, isLoading, isError } = useQuery(
        ['books', { query }],
        () => getBooks(query)
    );

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
                        {isLoading && <div>Loading...</div>}
                        {isError && <div>Error fetching books.</div>}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {books?.map(book => (
                                <BookCard 
                                    key={book._id}
                                    id={book._id!}
                                    title={book.title}
                                    author={book.author?.name || 'Unknown'}
                                    cover={book.coverImage!}
                                    price={book.price || 0} // Assuming price is a property on your book model
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

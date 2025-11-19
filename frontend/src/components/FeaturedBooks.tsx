import { useQuery } from "react-query";
import { getBooks } from "../http/api";
import { Link } from "react-router-dom";
import { Book } from "../types";

function FeaturedBooks() {
    const {
        data,
        isLoading,
        isError,
    } = useQuery("books", () => getBooks());

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching books.</div>;
    }

    const books = data?.books || [];

    return (
        <div className="py-16 bg-base-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 font-serif">
                    New & Noteworthy
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {books.slice(0, 4).map((book: Book) => (
                        <div
                            key={book._id}
                            className="card bg-base-100 shadow-xl image-full"
                        >
                            <figure>
                                <img src={book.coverImage} alt={book.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{book.title}</h2>
                                <p>{book.author?.name}</p>
                                <div className="card-actions justify-end">
                                    <Link
                                        to={`/book/${book._id}`}
                                        className="btn btn-primary"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedBooks;


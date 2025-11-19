import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBooks } from "../http/api";
import FilterSidebar from "../components/FilterSidebar";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";
import { Book } from "../types";

// Hardcoded genres for now
const genres = ["Science Fiction", "Mystery", "Fantasy", "Romance"];

function BrowseBooksPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("q") || "";
    const selectedGenres = searchParams.getAll("genre") || [];
    const price = Number(searchParams.get("price")) || 100;
    const page = Number(searchParams.get("page")) || 1;

    const { data, isLoading, isError } = useQuery(
        ["books", { query, selectedGenres, price, page }],
        () => getBooks(query, selectedGenres, price, page)
    );

    const books = data?.books;
    const pagination = data?.pagination;

    const handleQueryChange = (newQuery: string) => {
        const params = new URLSearchParams(searchParams);
        if (newQuery) {
            params.set("q", newQuery);
        } else {
            params.delete("q");
        }
        params.set("page", "1"); // Reset to first page on new search
        setSearchParams(params);
    };

    const handleGenreChange = (genre: string) => {
        const params = new URLSearchParams(searchParams);
        const allGenres = params.getAll("genre");
        if (allGenres.includes(genre)) {
            params.delete("genre");
            allGenres
                .filter((g) => g !== genre)
                .forEach((g) => params.append("genre", g));
        } else {
            params.append("genre", genre);
        }
        params.set("page", "1"); // Reset to first page on genre change
        setSearchParams(params);
    };

    const handlePriceChange = (newPrice: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("price", newPrice.toString());
        params.set("page", "1"); // Reset to first page on price change
        setSearchParams(params);
    };

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", newPage.toString());
        setSearchParams(params);
    };

    return (
        <div className="bg-base-200">
            <div className="container mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold font-serif">
                        Our Collection
                    </h1>
                    <p className="text-lg">Home &gt; Browse Books</p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <FilterSidebar
                            query={query}
                            onQueryChange={handleQueryChange}
                            genres={genres}
                            selectedGenres={selectedGenres}
                            onGenreChange={handleGenreChange}
                            price={price}
                            onPriceChange={handlePriceChange}
                        />
                    </div>

                    {/* Book Grid */}
                    <div className="lg:w-3/4">
                        {isLoading && <div>Loading...</div>}
                        {isError && <div>Error fetching books.</div>}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {books?.map((book: Book) => (
                                <BookCard
                                    key={book._id}
                                    id={book._id!}
                                    title={book.title}
                                    author={book.author?.name || "Unknown"}
                                    coverImage={book.coverImage!}
                                    price={book.price || 0}
                                />
                            ))}
                        </div>
                        {pagination && pagination.totalPages > 1 && (
                            <Pagination
                                currentPage={pagination.currentPage}
                                totalPages={pagination.totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowseBooksPage;

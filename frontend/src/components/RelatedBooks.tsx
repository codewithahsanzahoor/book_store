import { useQuery } from "react-query";
import { getBooks } from "../http/api";
import BookCard from "./BookCard";
import { Book } from "../types";

function RelatedBooks({
	genre,
	currentBookId,
}: {
	genre: string;
	currentBookId: string | undefined;
}) {
	const {
		data: books,
		isLoading,
		isError,
	} = useQuery<Book[]>(
		["related-books", genre],
		() => getBooks(`genre=${genre}`),
		{
			enabled: !!genre,
		}
	);

	if (isLoading) {
		return <div className="text-center">Loading related books...</div>;
	}

	if (isError) {
		return (
			<div className="text-center text-red-500">
				Error loading related books.
			</div>
		);
	}

	const relatedBooks = books?.filter((book) => book._id !== currentBookId);

	if (!relatedBooks || relatedBooks.length === 0) {
		return null;
	}

	return (
		<div className="py-16 bg-base-200 mt-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8 font-serif">
					You Might Also Like
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{relatedBooks.map((book) => (
						<BookCard
							key={book._id}
							id={book._id!}
							title={book.title}
							author={book.author!.name}
							coverImage={book.coverImage!}
							price={book.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default RelatedBooks;

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBookById } from "../http/api";
import CustomerReviews from "../components/CustomerReviews";
import RelatedBooks from "../components/RelatedBooks";
import { Book } from "../types";

function BookDetailsPage() {
	const { id } = useParams<{ id: string }>();

	const {
		data: book,
		isLoading,
		isError,
	} = useQuery<Book>(["book", id], () => getBookById(id!), {
		enabled: !!id,
	});

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<span className="loading loading-spinner loading-lg"></span>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="text-center text-red-500 text-xl">
				Error loading book details.
			</div>
		);
	}

	if (!book) {
		return <div className="text-center text-xl">Book not found.</div>;
	}

	return (
		<div className="bg-base-200">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Column: Book Cover */}
					<div>
						<img
							src={book.coverImage}
							alt={`Cover of ${book.title}`}
							className="rounded-lg shadow-2xl w-full h-auto object-cover"
						/>
					</div>

					{/* Right Column: Book Info */}
					<div>
						<h1 className="text-4xl font-bold font-serif mb-2">
							{book.title}
						</h1>
						<p className="text-xl text-gray-600 mb-4">
							by {book.author?.name}
						</p>
						{book?.price !== undefined && (
							<p className="text-3xl font-bold text-primary mb-6">
								${book.price.toFixed(2)}
							</p>
						)}
						<div className="flex items-center mb-6">
							<label className="mr-4">Quantity:</label>
							<div className="join">
								<button className="join-item btn">-</button>
								<input
									className="join-item btn"
									type="number"
									defaultValue={1}
									style={{ width: "4rem" }}
								/>
								<button className="join-item btn">+</button>
							</div>
						</div>
						<button className="btn btn-primary btn-lg w-full">
							Add to Cart
						</button>
						<div className="mt-8">
							<h3 className="text-2xl font-bold font-serif mb-2">
								Synopsis
							</h3>
							<p className="text-base leading-relaxed">
								{book.description}
							</p>
						</div>
					</div>
				</div>

				{/* Customer Reviews Section */}
				<CustomerReviews bookId={book._id} />
			</div>

			{/* Related Books Section */}
			<RelatedBooks genre={book.genre} currentBookId={book._id} />
		</div>
	);
}

export default BookDetailsPage;

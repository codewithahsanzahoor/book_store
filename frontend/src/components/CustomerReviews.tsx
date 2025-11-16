import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getReviews, createReview } from "../http/api";
import { useAuthStore } from "../store/authStore";

function CustomerReviews({ bookId }: { bookId: string | undefined }) {
	const { user } = useAuthStore();
	const queryClient = useQueryClient();
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");

	const {
		data: reviews,
		isLoading,
		isError,
	} = useQuery(["reviews", bookId], () => getReviews(bookId!), {
		enabled: !!bookId,
	});

	const mutation = useMutation(
		(newReview: { bookId: string; rating: number; comment: string }) =>
			createReview(newReview),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["reviews", bookId]);
				setRating(0);
				setComment("");
			},
		}
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (rating > 0 && comment.trim() !== "" && bookId) {
			mutation.mutate({ bookId, rating, comment });
		}
	};

	return (
		<div className="mt-16">
			<h3 className="text-3xl font-bold font-serif mb-6">
				What Readers Are Saying
			</h3>

			{isLoading && <p>Loading reviews...</p>}
			{isError && <p className="text-red-500">Failed to load reviews.</p>}

			{/* Existing Reviews */}
			{reviews && reviews.length > 0 ? (
				<div className="space-y-6">
					{reviews.map((review) => (
						<div
							key={review._id}
							className="p-4 border rounded-lg shadow-sm"
						>
							<div className="flex items-center mb-2">
								<div className="rating">
									{[...Array(5)].map((_, i) => (
										<span
											key={i}
											className={`mask mask-star-2 ${
												i < review.rating
													? "bg-orange-400"
													: "bg-gray-300"
											}`}
										></span>
									))}
								</div>
								<p className="ml-2 font-semibold">
									{review.user.name}
								</p>
							</div>
							<p>{review.comment}</p>
						</div>
					))}
				</div>
			) : (
				!isLoading && <p>No reviews yet. Be the first to write one!</p>
			)}

			{/* Write a Review Form */}
			{user && (
				<div className="mt-10">
					<h4 className="text-2xl font-bold font-serif mb-4">
						Write a Review
					</h4>
					<form className="space-y-4" onSubmit={handleSubmit}>
						<div className="rating rating-lg">
							{[...Array(5)].map((_, i) => (
								<input
									key={i}
									type="radio"
									name="rating-new"
									className="mask mask-star-2 bg-orange-400"
									checked={rating === i + 1}
									onChange={() => setRating(i + 1)}
								/>
							))}
						</div>
						<textarea
							className="textarea textarea-bordered w-full"
							placeholder="Share your thoughts..."
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						></textarea>
						<button
							className="btn btn-primary"
							type="submit"
							disabled={mutation.isLoading}
						>
							{mutation.isLoading
								? "Submitting..."
								: "Submit Review"}
						</button>
						{mutation.isError && (
							<p className="text-red-500">
								Failed to submit review. Please try again.
							</p>
						)}
					</form>
				</div>
			)}
		</div>
	);
}

export default CustomerReviews;

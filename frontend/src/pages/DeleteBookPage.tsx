import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams, Link } from "react-router-dom";
import { deleteBook } from "../http/api";

export interface ErrorWithResponse {
	response: {
		data: {
			message: string;
		};
	};
}

function DeleteBookPage() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	if (!id) {
		return <div>Error: ID is required to delete a book</div>;
	}

	const mutation = useMutation<any, ErrorWithResponse, string>(deleteBook, {
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["books"] });
			navigate("/dashboard/books");
		},
		onError: (error) => {
			console.error("Error deleting book:", error);
		},
	});

	const handleDelete = () => {
		mutation.mutate(id);
	};

	return (
		<div className="p-6">
			<div className="card bg-base-100 shadow-xl max-w-lg mx-auto text-center">
				<div className="card-body">
					<h2 className="card-title text-2xl justify-center">Are you sure?</h2>
					<p>Do you really want to delete this book? This process cannot be undone.</p>
					{mutation.isError && (
						<p className="text-red-500">
							{mutation.error.response?.data?.message || "An unexpected error occurred."}
						</p>
					)}
					<div className="card-actions justify-center gap-4 mt-4">
						<Link to="/dashboard/books" className="btn">Cancel</Link>
						<button 
							className={`btn btn-error ${mutation.isLoading ? 'is-loading' : ''}`}
							disabled={mutation.isLoading}
							onClick={handleDelete}
						>
							{mutation.isLoading ? 'Deleting...' : 'Confirm Delete'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteBookPage;

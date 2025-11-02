import { Link, useNavigate } from "react-router-dom";
import { getAuthorBookPagination } from "../http/api";
import { useQuery } from "react-query";
import { useState } from "react";

function BooksPage() {
	const navigate = useNavigate();
	const [page, setPage] = useState(1); // Manage current page state
	const limit = 3; // Define how many items per page

	const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
		["books", { page, limit }], // Use page from state
		() => getAuthorBookPagination(page, limit), // Fetch data based on current page
		{
			keepPreviousData: true,
			// staleTime: 1000 * 60 * 60,
			onSuccess: (data) => {
				// console.log("success", data);
			},
			onError: (error) => {
				console.log("error while fetching the author books", error);
			},
		}
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error fetching books</div>;
	}

	const handlePageChange = (newPage: number) => {
		setPage(newPage); // Update the current page
	};

	return (
		<div className="p-6">
			<div className="flex items-center justify-between mb-8">
				<h1 className="text-3xl font-bold">Manage Books</h1>
				<Link to="/dashboard/books/create">
					<button className="btn btn-primary">Create Book</button>
				</Link>
			</div>

			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th>Book Details</th>
							<th>Author Name</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{data?.books?.map((book) => (
							<tr key={book._id}>
								<td>
									<div className="flex items-center gap-3">
										<div className="avatar">
											<div className="mask mask-squircle h-12 w-12">
												<img
													src={book.coverImage}
													alt={book.title}
												/>
											</div>
										</div>
										<div>
											<div className="font-bold">{book.title}</div>
										</div>
									</div>
								</td>
								<td>{book.author?.name}</td>
								<td>
									<div className="flex gap-2">
										<button
											className="btn btn-outline btn-success btn-sm"
											onClick={() =>
												navigate(`/dashboard/books/update/${book._id}`)
											}
										>
											Edit
										</button>
										<button
											className="btn btn-outline btn-error btn-sm"
											onClick={() =>
												navigate(`/dashboard/books/delete/${book._id}`)
											}
										>
											Delete
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex justify-center items-center mt-4">
				<div className="join">
					<button
						className="join-item btn"
						onClick={() => handlePageChange(page - 1)}
						disabled={page === 1}
					>
						«
					</button>
					<button className="join-item btn">Page {page}</button>
					<button
						className="join-item btn"
						onClick={() => handlePageChange(page + 1)}
						disabled={!data?.pagination?.totalPages || page === data.pagination.totalPages}
					>
						»
					</button>
				</div>
			</div>
		</div>
	);
}

export default BooksPage;

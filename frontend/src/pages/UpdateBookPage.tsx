import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Book } from "../types";
import { getBookById, updateBook } from "../http/api";
import { useMutation, useQuery, useQueryClient } from "react-query";

function UpdateBookPage() {
	const { id } = useParams<{ id: string }>(); 
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	if (!id) return <div>Error: ID is required to update a book</div>;

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [genre, setGenre] = useState("");
	const [coverImage, setCoverImage] = useState<File | null>(null);
	const [pdf, setPdf] = useState<File | null>(null);

	const { data: book, isLoading, isError } = useQuery({
		queryKey: ["books", id],
		queryFn: () => getBookById(id),
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	useEffect(() => {
		if (book) {
			setTitle(book.title);
			setDescription(book.description);
			setGenre(book.genre);
		}
	}, [book]);

	const updateBookMutation = useMutation(
		(data: FormData) => updateBook(id, data),
		{
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ["books"] });
				navigate("/dashboard/books");
			},
			onError: (error) => {
				console.error("Error updating book:", error);
			},
		}
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading book.</div>;
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("title", title);
		formData.append("description", description);
		formData.append("genre", genre);
		if (coverImage) {
			formData.append("coverImage", coverImage);
		}
		if (pdf) {
			formData.append("file", pdf);
		}
		updateBookMutation.mutate(formData);
	};

	return (
		<div>
			<section className="bg-gray-100 p-4">
				<div className="container mx-auto">
					<div className="flex justify-between items-center">
						<h1 className="text-3xl font-bold">Update Book</h1>
					</div>
				</div>
			</section>
			<section className="p-4">
				<div className="container mx-auto">
					<form onSubmit={handleSubmit} className="max-w-md mx-auto">
						<div className="mb-4">
							<label htmlFor="title" className="block text-gray-700">
								Title
							</label>
							<input
								type="text"
								id="title"
								className="input input-bordered w-full"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="description" className="block text-gray-700">
								Description
							</label>
							<textarea
								id="description"
								className="textarea textarea-bordered w-full"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></textarea>
						</div>
						<div className="mb-4">
							<label htmlFor="genre" className="block text-gray-700">
								Genre
							</label>
							<input
								type="text"
								id="genre"
								className="input input-bordered w-full"
								value={genre}
								onChange={(e) => setGenre(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="coverImage" className="block text-gray-700">
								Cover Image
							</label>
							<input
								type="file"
								id="coverImage"
								className="file-input file-input-bordered w-full"
								onChange={(e) => setCoverImage(e.target.files ? e.target.files[0] : null)}
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="pdf" className="block text-gray-700">
								PDF File
							</label>
							<input
								type="file"
								id="pdf"
								className="file-input file-input-bordered w-full"
								onChange={(e) => setPdf(e.target.files ? e.target.files[0] : null)}
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Update Book
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}

export default UpdateBookPage;

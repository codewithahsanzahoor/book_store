import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { createBook } from "../http/api";

function CreateBookPage() {
	//? ref of the input field to get the data from user input of book data
	const titleRef = React.useRef<HTMLInputElement>(null);
	const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
	const genreRef = React.useRef<HTMLInputElement>(null);
	const imageRef = React.useRef<HTMLInputElement>(null);
	const pdfRef = React.useRef<HTMLInputElement>(null);

	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: createBook, // Function to send data to backend
		onSuccess: (data) => {
			console.log("🚀 ~ CreateBookPage ~ data:", data);
			queryClient.invalidateQueries({ queryKey: ["books"] });
			navigate("/dashboard/books");
		},
		onError: (error) => {
			console.error("Error creating book:", error);
			// alert("Failed to create book. Please try again.");
		},
	});

	const handleRegisterSubmit = () => {
		if (
			!titleRef.current?.value ||
			!descriptionRef.current?.value ||
			!genreRef.current?.value ||
			!imageRef.current?.files?.[0] ||
			!pdfRef.current?.files?.[0]
		) {
			return alert(
				"Please enter all required book data, including files."
			);
		}

		// Prepare FormData for file upload
		const formData = new FormData();
		formData.append("title", titleRef.current.value);
		formData.append("description", descriptionRef.current.value);
		formData.append("genre", genreRef.current.value);
		formData.append("coverImage", imageRef.current.files[0]);
		formData.append("file", pdfRef.current.files[0]);

		mutation.mutate(formData); // Trigger mutation with form data
	};

	return (
		<div className="p-6">
			<div className="flex items-center justify-between mb-8">
				<h1 className="text-3xl font-bold">Create a New Book</h1>
				<Link to="/dashboard/books">
					<button className="btn btn-outline">Back to Books</button>
				</Link>
			</div>

			<div className="card bg-base-100 shadow-xl max-w-lg mx-auto">
				<form className="card-body">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Title</span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							placeholder="Enter book title"
							ref={titleRef}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Genre</span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							placeholder="Enter book genre"
							ref={genreRef}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Description</span>
						</label>
						<textarea
							className="textarea textarea-bordered"
							placeholder="Enter book description"
							ref={descriptionRef}
						></textarea>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Cover Image</span>
						</label>
						<input
							type="file"
							accept=".png, .jpg, .jpeg"
							className="file-input file-input-bordered w-full"
							ref={imageRef}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Book PDF</span>
						</label>
						<input
							type="file"
							accept=".pdf"
							className="file-input file-input-bordered w-full"
							ref={pdfRef}
						/>
					</div>

					{mutation.isError && (
						<p className="text-red-600 text-center my-3">
							Something went wrong while creating the book. Please try again.
						</p>
					)}

					<div className="form-control mt-6">
						<button
							className={`btn btn-primary ${mutation.isLoading ? "is-loading" : ""}`}
							disabled={mutation.isLoading}
							onClick={(e) => {
								e.preventDefault();
								handleRegisterSubmit();
							}}
						>
							{mutation.isLoading ? "Creating..." : "Create Book"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateBookPage;

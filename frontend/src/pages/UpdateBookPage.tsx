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

Update Book
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}

export default UpdateBookPage;" "}
								Update Book
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}

export default UpdateBookPage;

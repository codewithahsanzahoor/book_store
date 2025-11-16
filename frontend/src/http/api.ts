import axios from "axios";
import { Book } from "../types";

//? create axios instance for api request to backend
export const api = axios.create({
	// baseURL: `${API_BACKEND_URL}/users/login` || "http://localhost:3000/api",
	baseURL: "http://localhost:3000/api",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

//? this will get all the books by all the authors
export const getBooks = async (query?: string): Promise<Book[]> => {
	const response = await api.get(`/books${query ? `?q=${query}` : ''}`);
	return response.data;
};

export const getBookById = async (id: string): Promise<Book> => {
	const response = await api.get(`/books/${id}`);
	return response.data;
};

//? this will get the books of the author only created by the author
export const authorBooks = async (): Promise<Book[]> => {
	const response = await api.post("/books/author");
	return response.data;
};

export const createBook = async (data: FormData): Promise<{ id: string }> => {
	const response = await api.post("/books", data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
};

export const deleteBook = async (id: string): Promise<{ id: string }> => {
	const response = await api.delete(`/books/${id}`);
	return response.data;
};

export const updateBook = async (
	id: string,
	data: FormData
): Promise<{ id: string }> => {
	const response = await api.put(`/books/${id}`, data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
};

export const getAuthorBookPagination = async (
	page: number,
	limit: number
): Promise<{
	books: Book[];
	pagination: {
		totalPages: number;
		currentPage: number;
		itemsPerPage: number;
	};
}> => {
	const response = await api.post(
		`/books/booksPerPages?page=${page}&limit=${limit}`
	);
	return response.data;
};

export const getOrders = async (): Promise<any[]> => {
	const response = await api.get("/orders");
	return response.data;
};

export const getUsers = async (): Promise<any[]> => {
	const response = await api.get("/users");
	return response.data;
};

export const getReviews = async (bookId: string): Promise<any[]> => {
    const response = await api.get(`/reviews/${bookId}`);
    return response.data;
};

export const createReview = async (data: { bookId: string, rating: number, comment: string }): Promise<any> => {
    const response = await api.post('/reviews', data);
    return response.data;
};

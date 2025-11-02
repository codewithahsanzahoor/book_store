import axios from "axios";
import { Book } from "../types";
//TODO: USE ENV WITH VITE TO GET BACKEND URL
//? this is how we get the api url from the .env file in the vite project for react
// const API_BACKEND_URL = import.meta.env.API_BACKEND_URL;

//? create axios instance for api request to backend
export const api = axios.create({
	// baseURL: `${API_BACKEND_URL}/users/login` || "http://localhost:3000/api",
	baseURL: "http://localhost:3000/api",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

//? create function to send login data to backend through api using axios
export const login = async (data: {
	email: string;
	password: string;
}): Promise<{ message: string; token: string }> => {
	const response = await api.post("/users/login", data);
	return response.data;
};

export const register = async (data: {
	name: string;
	email: string;
	password: string;
}): Promise<{ message: string; token: string }> => {
	const response = await api.post("/users/register", data);
	return response.data;
};

//? this will get all the books by all the authors
export const getBooks = async (): Promise<Book[]> => {
	const response = await api.get("/books");
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

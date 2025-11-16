export interface Author {
	_id: string;
	name: string;
}

export interface Book {
	_id?: string;
	title: string;
	coverImage?: string;
	author?: Author;
	genre: string;
	file?: string;
	description: string;
	price: number;
	createdAt?: string;
	__v?: number;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
}

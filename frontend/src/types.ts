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
	createdAt?: string;
	__v?: number;
}

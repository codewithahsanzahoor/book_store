export interface User {
	save(): unknown;
	_id: string;
	name: string;
	email: string;
	password: string;
	role: "user" | "admin";
	createdAt: Date;
	updatedAt: Date;
}

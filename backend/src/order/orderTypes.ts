import { User } from "../user/userTypes";
import { Book } from "../book/bookTypes";

export interface Order {
    _id: string;
    user: User;
    books: Book[];
    totalAmount: number;
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
}

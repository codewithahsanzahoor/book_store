import { User } from "../user/userTypes";
import { Book } from "../book/bookTypes";

export interface OrderItem {
    book: Book;
    quantity: number;
}

export interface Order {
    _id: string;
    user: User;
    items: OrderItem[];
    totalAmount: number;
    shippingAddress: {
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    };
    paymentStatus: 'pending' | 'paid' | 'failed';
    paymentIntentId?: string;
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
}

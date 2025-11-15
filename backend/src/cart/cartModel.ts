import mongoose, { Document, Schema } from 'mongoose';

export interface CartItem {
    book: mongoose.Types.ObjectId;
    quantity: number;
}

export interface Cart extends Document {
    user: mongoose.Types.ObjectId;
    items: CartItem[];
    createdAt: Date;
    updatedAt: Date;
}

const CartItemSchema = new Schema<CartItem>({
    book: { type: Schema.Types.ObjectId, required: true, ref: 'Book' },
    quantity: { type: Number, required: true, default: 1 },
});

const CartSchema = new Schema<Cart>(
    {
        user: { type: Schema.Types.ObjectId, required: true, ref: 'User', unique: true },
        items: [CartItemSchema],
    },
    { timestamps: true }
);

export default mongoose.model<Cart>('Cart', CartSchema);

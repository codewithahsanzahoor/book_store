import mongoose, { Document, Schema } from "mongoose";
import { Order, OrderItem } from "./orderTypes";

const OrderItemSchema = new Schema<OrderItem>({
    book: { type: Schema.Types.ObjectId, required: true, ref: 'Book' },
    quantity: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema<Order>(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        items: [OrderItemSchema],
        totalAmount: { type: Number, required: true },
        shippingAddress: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zip: { type: String, required: true },
            country: { type: String, required: true },
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending",
        },
        paymentIntentId: { type: String },
        status: {
            type: String,
            enum: ["pending", "completed", "cancelled"],
            default: "pending",
        },
    },
    { timestamps: true }
);

const OrderModel = mongoose.model<Order>("Order", orderSchema);

export default OrderModel;

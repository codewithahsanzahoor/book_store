import mongoose from "mongoose";
import { Order } from "./orderTypes";

const orderSchema = new mongoose.Schema<Order>(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true }],
        totalAmount: { type: Number, required: true },
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

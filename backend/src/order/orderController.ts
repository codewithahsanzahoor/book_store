import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import OrderModel from "./orderModel";
import { AuthRequest } from "../../middlewares/authentication";
import Cart from "../cart/cartModel";
import Book from "../book/bookModel";

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    const { shippingAddress, paymentIntentId } = req.body;

    if (!shippingAddress) {
        return next(createHttpError(400, 'Shipping address is required'));
    }

    try {
        const cart = await Cart.findOne({ user: _req.user_id }).populate('items.book');
        if (!cart || cart.items.length === 0) {
            return next(createHttpError(400, 'Cart is empty'));
        }

        const totalAmount = cart.items.reduce((sum, item) => {
            const book = item.book as any; // Cast to any to access price
            return sum + (book.price || 0) * item.quantity;
        }, 0);

        const order = new OrderModel({
            user: _req.user_id,
            items: cart.items.map(item => ({
                book: item.book._id,
                quantity: item.quantity,
            })),
            totalAmount,
            shippingAddress,
            paymentStatus: paymentIntentId ? 'paid' : 'pending', // Assuming paid if paymentIntentId is provided
            paymentIntentId,
            status: 'pending',
        });

        await order.save();

        // Clear the user's cart after order creation
        cart.items = [];
        await cart.save();

        res.status(201).json(order);
    } catch (error) {
        return next(createHttpError(500, 'Error while creating order'));
    }
};

export const getMyOrders = async (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    try {
        const orders = await OrderModel.find({ user: _req.user_id })
            .populate('items.book', 'title coverImage price')
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        return next(createHttpError(500, 'Error while fetching my orders'));
    }
};

export const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    const { orderId } = req.params;
    try {
        const order = await OrderModel.findOne({ _id: orderId, user: _req.user_id })
            .populate('items.book', 'title coverImage price');
        if (!order) {
            return next(createHttpError(404, 'Order not found'));
        }
        res.json(order);
    } catch (error) {
        return next(createHttpError(500, 'Error while fetching order'));
    }
};

export const getAllOrders = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const orders = await OrderModel.find()
            .populate("user", "name email")
            .populate("items.book", "title coverImage price"); // Populate items.book
        res.json(orders);
    } catch (error) {
        return next(createHttpError(500, "Error while fetching orders"));
    }
};

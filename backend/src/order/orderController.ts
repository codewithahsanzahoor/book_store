import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import OrderModel from "./orderModel";

export const getAllOrders = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const orders = await OrderModel.find().populate("user", "name email").populate("books", "title");
        res.json(orders);
    } catch (error) {
        return next(createHttpError(500, "Error while fetching orders"));
    }
};

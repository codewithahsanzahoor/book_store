import express from "express";
import { getAllOrders, createOrder, getMyOrders, getOrderById } from "./orderController";
import { authenticate } from "../middlewares/authentication";
import { admin } from "../middlewares/admin";

const orderRouter = express.Router();

orderRouter.post("/", authenticate, createOrder);
orderRouter.get("/my-orders", authenticate, getMyOrders);
orderRouter.get("/:orderId", authenticate, getOrderById);
orderRouter.get("/", authenticate, admin, getAllOrders);

export default orderRouter;

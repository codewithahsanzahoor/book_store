import express from "express";
import { getAllOrders } from "./orderController";
import { authenticate } from "../middlewares/authentication";
import { admin } from "../middlewares/admin";

const orderRouter = express.Router();

orderRouter.get("/", authenticate, admin, getAllOrders);

export default orderRouter;

import express from "express";
import { authenticate } from "../middlewares/authentication";
import {
	addToCart,
	getCart,
	removeFromCart,
	updateCartItem,
	clearCart,
} from "./cartController";

const cartRouter = express.Router();

cartRouter.get("/", authenticate, getCart);
cartRouter.post("/", authenticate, addToCart);
cartRouter.delete("/items/:bookId", authenticate, removeFromCart);
cartRouter.put("/items/:bookId", authenticate, updateCartItem);
cartRouter.delete("/clear", authenticate, clearCart);

export default cartRouter;

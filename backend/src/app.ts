import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import bookRouter from "./book/bookRouter";
import orderRouter from "./order/orderRouter";
import cartRouter from "./cart/cartRouter"; // Import cartRouter
import paymentRouter from "./payment/paymentRouter"; // Import paymentRouter
import reviewRouter from "./review/reviewRouter";

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
app.use("/api/orders", orderRouter);
app.use("/api/cart", cartRouter); // Use cartRouter
app.use("/api/payment", paymentRouter); // Use paymentRouter
app.use("/api/reviews", reviewRouter);

app.use(globalErrorHandler);

export default app;

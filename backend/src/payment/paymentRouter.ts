import express from "express";
import { createPaymentIntent, stripeWebhook } from "./paymentController";
import { authenticate } from "../middlewares/authentication";

const paymentRouter = express.Router();

paymentRouter.post("/create-payment-intent", authenticate, createPaymentIntent);
paymentRouter.post(
	"/webhook",
	express.raw({ type: "application/json" }),
	stripeWebhook
);

export default paymentRouter;

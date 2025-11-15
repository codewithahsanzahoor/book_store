import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import Stripe from 'stripe';
import { config } from '../config/config';
import { AuthRequest } from '../../middlewares/authentication';
import Cart from '../cart/cartModel';
import OrderModel from '../order/orderModel';

const stripe = new Stripe(config.stripe_secret_key as string, {
    apiVersion: '2024-06-20',
});

export const createPaymentIntent = async (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;

    try {
        const cart = await Cart.findOne({ user: _req.user_id }).populate('items.book');
        if (!cart || cart.items.length === 0) {
            return next(createHttpError(400, 'Cart is empty'));
        }

        const totalAmount = cart.items.reduce((sum, item) => {
            const book = item.book as any; // Cast to any to access price
            return sum + (book.price || 0) * item.quantity;
        }, 0);

        if (totalAmount <= 0) {
            return next(createHttpError(400, 'Total amount must be greater than 0'));
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(totalAmount * 100), // Amount in cents
            currency: 'usd',
            metadata: { userId: _req.user_id.toString() },
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        return next(createHttpError(500, 'Error while creating payment intent'));
    }
};

export const stripeWebhook = async (req: Request, res: Response, next: NextFunction) => {
    const sig = req.headers['stripe-signature'] as string;
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err: any) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const userId = paymentIntent.metadata.userId;

        try {
            const cart = await Cart.findOne({ user: userId }).populate('items.book');
            if (!cart || cart.items.length === 0) {
                console.error('Webhook Error: Cart is empty for user', userId);
                return res.sendStatus(400);
            }

            const totalAmount = cart.items.reduce((sum, item) => {
                const book = item.book as any;
                return sum + (book.price || 0) * item.quantity;
            }, 0);

            const order = new OrderModel({
                user: userId,
                items: cart.items.map(item => ({
                    book: item.book._id,
                    quantity: item.quantity,
                })),
                totalAmount,
                shippingAddress: paymentIntent.shipping?.address ? {
                    street: paymentIntent.shipping.address.line1 || '',
                    city: paymentIntent.shipping.address.city || '',
                    state: paymentIntent.shipping.address.state || '',
                    zip: paymentIntent.shipping.address.postal_code || '',
                    country: paymentIntent.shipping.address.country || '',
                } : { // Fallback if shipping is not on payment intent
                    street: 'N/A',
                    city: 'N/A',
                    state: 'N/A',
                    zip: 'N/A',
                    country: 'N/A',
                },
                paymentStatus: 'paid',
                paymentIntentId: paymentIntent.id,
                status: 'pending',
            });

            await order.save();

            cart.items = [];
            await cart.save();

        } catch (error) {
            console.error('Error in webhook while creating order:', error);
            return res.sendStatus(500);
        }
    }

    res.sendStatus(200);
};

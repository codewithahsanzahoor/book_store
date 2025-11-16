import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import Cart from './cartModel';
import { AuthRequest } from '../middlewares/authentication';
import Book from '../book/bookModel';

export const getCart = async (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    try {
        const cart = await Cart.findOne({ user: _req.user_id }).populate('items.book');
        if (!cart) {
            return res.status(200).json({ items: [] });
        }
        res.json(cart);
    } catch (error) {
        return next(createHttpError(500, 'Error while fetching cart'));
    }
};

export const addToCart = async (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    const { bookId, quantity } = req.body;

    if (!bookId || !quantity) {
        return next(createHttpError(400, 'Book ID and quantity are required'));
    }

    try {
        const book = await Book.findById(bookId);
        if (!book) {
            return next(createHttpError(404, 'Book not found'));
        }

        let cart = await Cart.findOne({ user: _req.user_id });

        if (!cart) {
            cart = new Cart({ user: _req.user_id, items: [] });
        }

        const itemIndex = cart.items.findIndex((item) => item.book.toString() === bookId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ book: bookId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        return next(createHttpError(500, 'Error while adding to cart'));
    }
};

export const removeFromCart = async (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    const { bookId } = req.params;

    try {
        let cart = await Cart.findOne({ user: _req.user_id });

        if (!cart) {
            return next(createHttpError(404, 'Cart not found'));
        }

        cart.items = cart.items.filter((item) => item.book.toString() !== bookId);

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        return next(createHttpError(500, 'Error while removing from cart'));
    }
};

export const updateCartItem = async (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    const { bookId } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
        return next(createHttpError(400, 'Quantity is required'));
    }

    try {
        let cart = await Cart.findOne({ user: _req.user_id });

        if (!cart) {
            return next(createHttpError(404, 'Cart not found'));
        }

        const itemIndex = cart.items.findIndex((item) => item.book.toString() === bookId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity = quantity;
        } else {
            return next(createHttpError(404, 'Item not found in cart'));
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        return next(createHttpError(500, 'Error while updating cart item'));
    }
};

export const clearCart = async (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    try {
        const cart = await Cart.findOne({ user: _req.user_id });
        if (!cart) {
            return next(createHttpError(404, 'Cart not found'));
        }
        cart.items = [];
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        return next(createHttpError(500, 'Error while clearing cart'));
    }
};

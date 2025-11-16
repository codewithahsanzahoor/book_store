import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import ReviewModel from './reviewModel';
import { AuthRequest } from '../middlewares/authentication';

export const createReview = async (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    const { bookId, rating, comment } = req.body;

    if (!_req.user_id) {
        return next(createHttpError(401, 'Unauthorized'));
    }

    if (!bookId || !rating || !comment) {
        return next(createHttpError(400, 'bookId, rating, and comment are required.'));
    }

    try {
        const review = new ReviewModel({
            user: _req.user_id,
            book: bookId,
            rating,
            comment,
        });

        await review.save();

        res.status(201).json(review);
    } catch (error) {
        return next(createHttpError(500, 'Failed to create review.'));
    }
};

export const getReviewsForBook = async (req: Request, res: Response, next: NextFunction) => {
    const { bookId } = req.params;

    if (!bookId) {
        return next(createHttpError(400, 'bookId is required.'));
    }

    try {
        const reviews = await ReviewModel.find({ book: bookId }).populate('user', 'name');
        res.status(200).json(reviews);
    } catch (error) {
        return next(createHttpError(500, 'Failed to fetch reviews.'));
    }
};

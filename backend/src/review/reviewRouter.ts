import express from 'express';
import { createReview, getReviewsForBook } from './reviewController';
import { authenticate } from '../middlewares/authentication';

const reviewRouter = express.Router();

reviewRouter.post('/', authenticate, createReview);
reviewRouter.get('/:bookId', getReviewsForBook);

export default reviewRouter;

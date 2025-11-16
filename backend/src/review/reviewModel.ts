import { Schema, model, Document, Types } from 'mongoose';

export interface IReview extends Document {
    user: Types.ObjectId;
    book: Types.ObjectId;
    rating: number;
    comment: string;
}

const reviewSchema = new Schema<IReview>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
}, { timestamps: true });

const ReviewModel = model<IReview>('Review', reviewSchema);

export default ReviewModel;

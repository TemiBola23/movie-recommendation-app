import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    movie: { type: Number, required: true },
    rating: { type: Number, required: true },
    text: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Review', reviewSchema);

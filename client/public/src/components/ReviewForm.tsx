// ReviewForm.tsx
import React, { useState } from 'react';

interface Props {
  movieId: number;
  onSubmitReview: (review: { rating: number; comment: string }) => void;
}

const ReviewForm: React.FC<Props> = ({ movieId, onSubmitReview }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !comment) return alert('Please provide both rating and comment');
    onSubmitReview({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
      <div className="flex items-center gap-2 mb-2">
        <label className="text-sm font-medium">Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border p-1 rounded"
        >
          <option value={0}>Select</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} Star{n > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={3}
        placeholder="Write your thoughts..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;

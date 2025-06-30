// ReviewForm.tsx
import React, { useState } from 'react';
import { submitReview } from '../services/api'; // Assume this function submits the review to your API
import { useAuth } from '../context/AuthContext';

const ReviewForm: React.FC<{ movieId: number; onReviewSubmitted: () => void }> = ({ movieId, onReviewSubmitted }) => {
  const { token } = useAuth();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await submitReview(movieId, { comment, rating }, token);
      setComment('');
      setRating(5);
      onReviewSubmitted();
    } catch (error) {
      console.error('Failed to submit review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review..."
        className="w-full p-2 border rounded"
        rows={4}
        required
      />
      <div className="flex items-center space-x-2">
        <label htmlFor="rating" className="font-semibold">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min="1"
          max="10"
          className="w-16 p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className={`w-full py-2 px-4 rounded ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
};

export default ReviewForm;

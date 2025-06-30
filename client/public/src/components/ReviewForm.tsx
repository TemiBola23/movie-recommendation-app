// ReviewForm.tsx
import React, { useState } from 'react';
import { submitReview } from '../services/api';
import { useAuth } from '../context/AuthContext';

const ReviewForm = ({ movieId, onReviewSubmitted }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitReview(movieId, { comment, rating }, token);
    setComment('');
    setRating(5);
    onReviewSubmitted();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a review..."
        className="w-full border p-2 rounded"
      ></textarea>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        min="1"
        max="10"
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;



import React, { useState } from 'react';
import axios from 'axios';

function ReviewForm({ movieId, onReviewPosted }) {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [msg, setMsg] = useState('');

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/reviews`, {
        movieId,
        rating,
        comment
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRating('');
      setComment('');
      setMsg('Review submitted!');
      if (onReviewPosted) onReviewPosted();
    } catch (err) {
      setMsg('Error posting review');
    }
  };

  return (
    <form onSubmit={submitReview} className="space-y-2 mt-4">
      <h3 className="text-lg font-semibold">Leave a Review</h3>
      <input type="number" placeholder="Rating (0-10)" value={rating} onChange={e => setRating(e.target.value)} required className="w-full p-2 border rounded" />
      <textarea placeholder="Your comment" value={comment} onChange={e => setComment(e.target.value)} required className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      {msg && <p className="text-sm mt-2">{msg}</p>}
    </form>
  );
}

export default ReviewForm;

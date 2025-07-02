import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ReviewForm: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/reviews`, {
        movieId, rating, comment
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Review submitted!');
      navigate(`/movie/${movieId}`);
    } catch {
      alert('Failed to submit review');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow rounded mt-6">
      <h2 className="text-xl font-bold mb-4">Submit Review</h2>
      <label className="block mb-2">Rating (1–10):</label>
      <input type="range" min={1} max={10} value={rating} onChange={e => setRating(+e.target.value)} className="w-full mb-4"/>
      <textarea placeholder="Comment" rows={4} className="w-full mb-4 p-2 border rounded" required value={comment} onChange={e => setComment(e.target.value)}/>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default ReviewForm;

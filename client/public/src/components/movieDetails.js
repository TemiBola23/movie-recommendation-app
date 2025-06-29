import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';

function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
      setMovie(res.data);
    };
    const fetchReviews = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/reviews/${movieId}`);
      setReviews(res.data);
    };
    fetchMovie();
    fetchReviews();
  }, [movieId]);

  return (
    <div className="p-4">
      {movie && (
        <>
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p>{movie.overview}</p>
          <p className="text-sm mt-2">Release Date: {movie.release_date}</p>
          <p className="text-sm">Rating: {movie.vote_average}</p>
        </>
      )}
      <ReviewForm movieId={movieId} onReviewPosted={() => window.location.reload()} />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Reviews</h3>
        {reviews.length ? reviews.map((r, idx) => (
          <div key={idx} className="border p-2 my-2 rounded">
            <p><strong>{r.userId.username}</strong> rated {r.rating}/10</p>
            <p>{r.comment}</p>
          </div>
        )) : <p>No reviews yet.</p>}
      </div>
    </div>
  );
}

export default MovieDetails;

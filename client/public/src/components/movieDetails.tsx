// MovieDetails.tsx
import React, { useEffect, useState } from 'react';
import { getMovieDetails, getReviewsByMovie } from '../services/api';

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    };

    const fetchReviews = async () => {
      const data = await getReviewsByMovie(movieId);
      setReviews(data);
    };

    fetchDetails();
    fetchReviews();
  }, [movieId]);

  if (!movie) return <p className="text-center">Loading movie details...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
      <p className="mb-1 text-gray-700">{movie.overview}</p>
      <p className="text-sm text-gray-500">Release Date: {movie.release_date}</p>
      <p className="text-sm text-gray-500">Rating: {movie.vote_average}</p>

      {movie.trailer && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Trailer:</h3>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${movie.trailer}`}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Reviews</h3>
        {

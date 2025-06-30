'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieReviews } from '../services/api';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await getMovieDetails(Number(id));
        setMovie(res.data);
      } catch (err) {
        console.error('Movie fetch failed', err);
      }
    };

    const fetchReviews = async () => {
      try {
        const res = await getMovieReviews(Number(id));
        setReviews(res.data);
      } catch (err) {
        console.error('Review fetch failed', err);
      }
    };

    if (id) {
      fetchDetails();
      fetchReviews();
    }
  }, [id]);

  if (!movie) return <p className="p-4">Loading movie details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
              : 'https://via.placeholder.com/300x450?text=No+Image'
          }
          alt={movie.title}
          className="rounded w-full md:w-64"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-sm text-gray-500 mb-1">
            Release Date: {movie.release_date}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Rating: {movie.vote_average} / 10
          </p>
          <p className="text-gray-800">{movie.overview}</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">User Reviews</h2>
        {reviews.length > 0 ? (
          <ul className="space-y-2">
            {reviews.map((r) => (
              <li key={r._id} className="bg-white p-3 rounded shadow">
                <p className="text-sm font-semibold">{r.user?.username}</p>
                <p className="text-sm text-gray-600">Rating: {r.rating}</p>
                <p className="text-gray-800">{r.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;

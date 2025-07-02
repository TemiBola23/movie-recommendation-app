// client/src/components/MovieSearch.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/movies/search`,
        {
          params: { query },
        }
      );
      setMovies(response.data);
    } catch (err) {
      setError('Failed to fetch movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Search Movies</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter movie title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-blue-600">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
            ) : (
              <div className="w-full h-72 bg-gray-300 flex items-center justify-center text-gray-600">
                No Image
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {movie.overview}
              </p>
              <div className="text-sm text-gray-500 mt-2">
                Release: {movie.release_date || 'N/A'} | Rating:{' '}
                {movie.vote_average}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;

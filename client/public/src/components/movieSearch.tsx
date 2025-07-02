// client/src/components/MovieSearch.tsx
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import api from '../services/api';

const MovieSearch: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch movies from TMDB
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const params: any = {
        query,
        page,
        sort_by: sortBy,
        with_genres: genre || undefined,
        'vote_average.gte': rating || undefined,
      };

      const endpoint = query
        ? '/search/movie'
        : '/discover/movie';

      const res = await api.get(endpoint, { params });
      setMovies(res.data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query, genre, rating, sortBy, page]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Discover Movies</h1>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full sm:w-64 p-2 border rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="p-2 border rounded"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
          <option value="10749">Romance</option>
          <option value="27">Horror</option>
        </select>

        <select
          className="p-2 border rounded"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Min Rating</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
          <option value="6">6+</option>
          <option value="5">5+</option>
        </select>

        <select
          className="p-2 border rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="popularity.desc">Popularity</option>
          <option value="release_date.desc">Newest</option>
          <option value="vote_average.desc">Top Rated</option>
        </select>
      </div>

      {/* Movie Cards */}
      {loading ? (
        <p className="text-center text-gray-500">Loading movies...</p>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-10">No movies found.</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-700 mt-2">Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieSearch;

// MovieSearch.tsx
import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ genre: '', rating: '', year: '' });
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await fetchMovies(query, filters);
      setMovies(res);
    } catch (err) {
      console.error('Search failed:', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          className="p-2 border rounded"
          placeholder="Search movie title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        >
          <option value="">All Genres</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
        </select>
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="Rating ≥"
          onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
        />
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="Year"
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
        />
        <button
          className="p-2 bg-blue-600 text-white rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="border rounded p-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm">{movie.release_date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;

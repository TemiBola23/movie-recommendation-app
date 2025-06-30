// MovieSearch.tsx
import React, { useState } from 'react';
import { searchMovies } from '../services/api';
import MovieDetails from './MovieDetails';
import WatchlistManager from './WatchlistManager';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    setResults(movies);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Search Movies</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 w-full rounded"
          placeholder="Enter movie title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {results.map((movie) => (
          <div
            key={movie.id}
            className="border p-2 rounded hover:bg-gray-50 cursor-pointer"
          >
            <h3
              onClick={() => setSelectedId(movie.id)}
              className="font-semibold text-lg"
            >
              {movie.title}
            </h3>
            <p className="text-sm text-gray-500">{movie.release_date}</p>
            <WatchlistManager movie={movie} />
          </div>
        ))}
      </div>

      {selectedId && (
        <div className="mt-6">
          <MovieDetails movieId={selectedId} />
        </div>
      )}
    </div>
  );
};

export default MovieSearch;

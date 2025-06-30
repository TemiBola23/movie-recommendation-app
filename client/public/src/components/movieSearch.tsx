'use client';

import React, { useEffect, useState } from 'react';
import { searchMovies, discoverMovies } from '../services/api';
import Pagination from './Pagination';

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const [filter, setFilter] = useState('popular');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await searchMovies(query, page);
      setMovies(res.data.results);
      setTotalPages(res.data.total_pages);
    } catch (err) {
      console.error('Search failed', err);
    }
  };

  const handleDiscover = async () => {
    try {
      const res = await discoverMovies(`sort_by=${filter}.desc`, page);
      setMovies(res.data.results);
      setTotalPages(res.data.total_pages);
    } catch (err) {
      console.error('Discover failed', err);
    }
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    } else {
      handleDiscover();
    }
  }, [filter, page]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          className="flex-1 px-4 py-2 border rounded"
        />
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setPage(1);
          }}
          className="px-4 py-2 border rounded"
        >
          <option value="popularity">Popularity</option>
          <option value="vote_average">Rating</option>
          <option value="release_date">Release Date</option>
        </select>
        <button
          onClick={() => {
            setPage(1);
            handleSearch();
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-white shadow rounded p-2">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : 'https://via.placeholder.com/300x450?text=No+Image'
                }
                alt={movie.title}
                className="w-full rounded"
              />
              <h3 className="text-sm font-semibold mt-2">{movie.title}</h3>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={Math.min(totalPages, 500)} // TMDB allows up to page 500
          onPageChange={(newPage) => setPage(newPage)}
        />
      )}
    </div>
  );
};

export default MovieSearch;


import React, { useState, useEffect } from 'react';
import { searchDiscover, getGenres } from '../services/api';
import Pagination from './Pagination';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [genres, setGenres] = useState([]);
  const [filters, setFilters] = useState({ genre:'', minRating:'', year:'' });
  const [results, setResults] = useState([]);
  const [pageInfo, setPageInfo] = useState({ current:1, total:1 });

  useEffect(() => {
    getGenres().then(setGenres);
  }, []);

  const fetchMovies = async (page = 1) => {
    const resp = await searchDiscover({ ...filters, page });
    setResults(resp.results);
    setPageInfo({ current: page, total: resp.totalPages });
  };

  return (
    <div className="p-4">
      <form className="flex flex-wrap gap-4 mb-6">
        <input type="text" placeholder="Search..." value={query}
          onChange={e => setQuery(e.target.value)}
          className="p-2 border rounded" />
        <select className="p-2 border rounded"
          onChange={e => setFilters(f => ({...f, genre: e.target.value}))}>
          <option value="">All Genres</option>
          {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
        </select>
        <input type="number" placeholder="Min Rating" min="0" max="10" step="0.1"
          className="p-2 border rounded"
          onChange={e => setFilters(f => ({...f, minRating: e.target.value}))} />
        <input type="number" placeholder="Year" min="1900" max="2099"
          className="p-2 border rounded"
          onChange={e => setFilters(f => ({...f, year: e.target.value}))} />
        <button type="button" onClick={() => fetchMovies()} 
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
          Search / Filter
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map(movie => (
          <div key={movie.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-64 object-cover"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={pageInfo.current}
        totalPages={pageInfo.total}
        onPageChange={p => fetchMovies(p)}
      />
    </div>
  );
}

export default MovieSearch;

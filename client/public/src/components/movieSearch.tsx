import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieSearch: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('popularity.desc');

  const fetchMovies = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/movies/discover`, {
        params: { query, sort_by: filter }
      });
      setMovies(res.data);
    } catch (err) {
      console.error('Error fetching movies', err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query, filter]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Discover Movies</h2>
      <input
        type="text"
        placeholder="Search by title or genre"
        className="border p-2 rounded w-full mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select className="mb-4 p-2 border rounded" onChange={(e) => setFilter(e.target.value)}>
        <option value="popularity.desc">Most Popular</option>
        <option value="release_date.desc">Newest Releases</option>
        <option value="vote_average.desc">Top Rated</option>
      </select>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie: any) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="bg-white rounded shadow p-2">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            <h3 className="text-sm font-semibold mt-2">{movie.title}</h3>
            <p className="text-xs text-gray-600">{movie.release_date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;

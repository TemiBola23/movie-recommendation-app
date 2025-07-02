
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const MovieSearch: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('popularity.desc');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/movies/search`, {
          params: { query, sort_by: filter }
        });
        setMovies(res.data);
      } catch (err) { console.error(err); }
    };
    fetchMovies();
  }, [query, filter]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Discover Movies</h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search movies..."
          className="border p-2 rounded flex-1"
          value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <select className="p-2 border rounded" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="popularity.desc">Most Popular</option>
          <option value="release_date.desc">Newest Releases</option>
          <option value="vote_average.desc">Top Rated</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(movie => (
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
    </div>
  );
};

export default MovieSearch;

// MovieSearch.tsx
import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api'; // Assume this function fetches movies with pagination
import Pagination from './Pagination';

const MovieSearch: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(currentPage);
      setMovies(data.movies);
      setTotalPages(data.totalPages);
    };

    loadMovies();
  }, [currentPage]);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="p-2 bg-white shadow rounded">
            <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded" />
            <h3 className="text-sm font-semibold mt-2">{movie.title}</h3>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default MovieSearch;

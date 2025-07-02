// client/src/components/MovieCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
}) => {
  return (
    <div className="rounded-lg shadow bg-white hover:shadow-lg transition overflow-hidden">
      <Link to={`/movie/${id}`}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="w-full h-72 object-cover"
          />
        ) : (
          <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-600">
            No Image
          </div>
        )}
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{overview}</p>
        <div className="text-xs text-gray-500 mt-2">
          <span>📅 {release_date || 'N/A'} </span> | <span>⭐ {vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;// client/src/components/MovieCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
}) => {
  return (
    <div className="rounded-lg shadow bg-white hover:shadow-lg transition overflow-hidden">
      <Link to={`/movie/${id}`}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="w-full h-72 object-cover"
          />
        ) : (
          <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-600">
            No Image
          </div>
        )}
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{overview}</p>
        <div className="text-xs text-gray-500 mt-2">
          <span>📅 {release_date || 'N/A'} </span> | <span>⭐ {vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

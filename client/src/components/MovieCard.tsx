import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const MovieCard: React.FC<Props> = ({
  id, title, overview, poster_path, release_date, vote_average
}) => (
  <div className="bg-white rounded shadow hover:shadow-lg overflow-hidden">
    <Link to={`/movie/${id}`}>
      {poster_path
        ? <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} className="w-full h-48 object-cover"/>
        : <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-600">No Image</div>
      }
    </Link>
    <div className="p-3">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 truncate">{overview}</p>
      <div className="mt-2 text-xs text-gray-500">
        {release_date} | ⭐ {vote_average}
      </div>
    </div>
  </div>
);

export default MovieCard;

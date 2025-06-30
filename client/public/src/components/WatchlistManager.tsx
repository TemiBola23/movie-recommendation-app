import React, { useEffect, useState } from 'react';
import { addToWatchlist, fetchWatchlist } from '../services/api';

interface Props {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  };
}

const WatchlistManager: React.FC<Props> = ({ movie }) => {
  const token = localStorage.getItem('token');
  const [inWatchlist, setInWatchlist] = useState(false);

  useEffect(() => {
    const checkWatchlist = async () => {
      if (!token) return;
      const list = await fetchWatchlist(token);
      const found = list?.some((m: any) => m.id === movie.id);
      setInWatchlist(found);
    };
    checkWatchlist();
  }, [movie.id, token]);

  const handleAdd = async () => {
    if (!token) {
      alert('Please login to add movies to your watchlist.');
      return;
    }

    try {
      await addToWatchlist(token, movie);
      setInWatchlist(true);
    } catch (err) {
      console.error('Error adding to watchlist:', err);
    }
  };

  return (
    <div className="mt-2">
      {inWatchlist ? (
        <button
          className="bg-gray-400 text-white px-3 py-1 rounded cursor-not-allowed"
          disabled
        >
          In Watchlist
        </button>
      ) : (
        <button
          className="bg-purple-600 text-white px-3 py-1 rounded"
          onClick={handleAdd}
        >
          Add to Watchlist
        </button>
      )}
    </div>
  );
};

export default WatchlistManager;

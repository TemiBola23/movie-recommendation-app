import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const WatchlistManager: React.FC = () => {
  const [watchlist, setWatchlist] = useState<any[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/watchlist`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setWatchlist(res.data);
      } catch {
        console.error('Failed to load watchlist');
      }
    };
    fetchList();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Watchlist</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {watchlist.map(movie => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default WatchlistManager;

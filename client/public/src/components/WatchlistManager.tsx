// WatchlistManager.tsx
import React, { useEffect, useState } from 'react';
import { getWatchlist, removeFromWatchlist } from '../services/api';
import { useAuth } from '../context/AuthContext';

const WatchlistManager = () => {
  const { token } = useAuth();
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const data = await getWatchlist(token);
      setWatchlist(data);
    };
    if (token) fetchWatchlist();
  }, [token]);

  const handleRemove = async (id) => {
    await removeFromWatchlist(id, token);
    setWatchlist((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p className="text-gray-500">No movies in your watchlist.</p>
      ) : (
        <ul className="space-y-2">
          {watchlist.map((movie) => (
            <li key={movie.id} className="flex justify-between border p-2 rounded">
              <span>{movie.title}</span>
              <button
                onClick={() => handleRemove(movie.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WatchlistManager;



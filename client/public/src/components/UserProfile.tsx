import React, { useEffect, useState } from 'react';
import { fetchWatchlist } from '../services/api';

const UserProfile = () => {
  const [watchlist, setWatchlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const loadWatchlist = async () => {
      if (!token) return;
      try {
        const data = await fetchWatchlist(token);
        setWatchlist(data || []);
      } catch (error) {
        console.error('Error loading watchlist:', error);
      } finally {
        setLoading(false);
      }
    };
    loadWatchlist();
  }, [token]);

  if (!token) return <p>Please log in to view your profile.</p>;
  if (loading) return <p>Loading your profile...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p className="text-gray-500">No movies saved yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {watchlist.map((movie) => (
            <div key={movie.id} className="border p-2 rounded">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full"
              />
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-sm">{movie.release_date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;

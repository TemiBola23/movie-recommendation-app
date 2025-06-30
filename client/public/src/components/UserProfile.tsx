// UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { getUserProfile, getRecommendations, removeFromWatchlist } from '../services/api';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getUserProfile(token);
      setUser(data);
    };

    const fetchRecs = async () => {
      const data = await getRecommendations(token);
      setRecommendations(data);
    };

    if (token) {
      fetchProfile();
      fetchRecs();
    }
  }, [token]);

  const handleRemove = async (id) => {
    await removeFromWatchlist(id, token);
    setUser((prev) => ({
      ...prev,
      watchlist: prev.watchlist.filter((m) => m.id !== id),
    }));
  };

  if (!user) return <p className="text-center">Loading profile...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Welcome, {user.username}</h2>

      <section className="mt-4">
        <h3 className="text-xl font-semibold">Your Watchlist</h3>
        <ul className="mt-2 grid grid-cols-2 gap-4">
          {user.watchlist.map((movie) => (
            <li key={movie.id} className="bg-white shadow p-2 rounded">
              <p className="font-medium">{movie.title}</p>
              <button
                onClick={() => handleRemove(movie.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-xl font-semibold">Recommendations</h3>
        <ul className="mt-2 grid grid-cols-2 gap-4">
          {recommendations.map((rec) => (
            <li key={rec.id} className="bg-gray-100 p-2 rounded">
              <p>{rec.title}</p>
              <p className="text-xs text-gray-500">{rec.overview?.slice(0, 60)}...</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UserProfile;


✅ UserProfile.tsx has been fully updated to:

🧾 Display the logged-in user's username

🎬 List watchlist movies with a remove button

🧠 Show dynamic personalized movie recommendations


All major frontend files now meet the final criteria.

Would you like a zipped copy of the updated full project next?


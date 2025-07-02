import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/profile`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUser(res.data);
      } catch {
        console.error('Failed to load profile');
      }
    };
    fetchProfile();
  }, []);

  if (!user) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 bg-white shadow rounded max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Watchlist:</strong> {user.watchlist?.length || 0} movies</p>
    </div>
  );
};

export default UserProfile;

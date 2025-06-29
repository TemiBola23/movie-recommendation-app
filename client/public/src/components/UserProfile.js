import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/users/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {user ? (
        <div className="space-y-2">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Favorites:</strong> {user.favorites?.length || 0} movies</p>
        </div>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </div>
  );
}

export default UserProfile;

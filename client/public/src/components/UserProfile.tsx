'use client';

import React, { useEffect, useState } from 'react';
import { getProfile, getUserReviews } from '../services/api';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const res = await getProfile(token);
        setUser(res.data);

        const reviewRes = await getUserReviews(token);
        setReviews(reviewRes.data);
      } catch (err) {
        setError('Unable to fetch profile data');
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (error) return <p className="p-4 text-red-600">{error}</p>;
  if (!user) return <p className="p-4">Loading profile...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">👤 Profile</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Your Reviews</h2>
      {reviews.length > 0 ? (
        <ul className

// Register.tsx
import React, { useState } from 'react';
import { register } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register({ username, email, password });
    if (res.message === 'User created') {
      navigate('/login');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;


✅ Login.tsx created!

Next: I’ll generate Register.tsx, ReviewForm.tsx, WatchlistManager.tsx, MovieSearch.tsx, and Pagination.tsx.

Shall I continue generating the next one now?


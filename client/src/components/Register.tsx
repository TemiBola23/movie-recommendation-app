import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, { email, password });
      alert('Registered! Please log in.');
      navigate('/login');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow rounded mt-6">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input type="email" placeholder="Email" className="block w-full mb-2 p-2 border rounded" required value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" className="block w-full mb-2 p-2 border rounded" required value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Register</button>
    </form>
  );
};

export default Register;

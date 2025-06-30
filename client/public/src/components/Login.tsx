// Login.tsx
import React, { useState } from 'react';
import { loginUser } from '../services/api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginUser(form);
    if (res.token) {
      setMessage('Login successful!');
      setToken(res.token);
      localStorage.setItem('token', res.token);
    } else {
      setMessage(res.message || 'Login failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 border rounded"
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Login
        </button>
      </form>
      {message && <p className="mt-2 text-blue-600">{message}</p>}
    </div>
  );
};

export default Login;

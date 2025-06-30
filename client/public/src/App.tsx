'use client';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import Recommendations from './components/Recommendations';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Router>
  );
};

export default App;

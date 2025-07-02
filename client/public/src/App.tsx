import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import WatchlistManager from './components/WatchlistManager';
import ReviewForm from './components/ReviewForm';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/watchlist" element={<WatchlistManager />} />
        <Route path="/review/:movieId" element={<ReviewForm />} />
      </Routes>
    </div>
  );
};

export default App;


import React from 'react';
import MovieSearch from './components/MovieSearch';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <h1 className="text-4xl font-bold text-center">🎬 Movie Recommendation App</h1>
      <MovieSearch />
      <Register />
      <Login />
      <UserProfile />
    </div>
  );
}

export default App;

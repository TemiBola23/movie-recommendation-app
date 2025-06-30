// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


✅ App.tsx has been updated with:

✅ Routes for all pages: Search, Register, Login, Profile, Movie Details

✅ Global context via AuthProvider

✅ Fallback route (*) that redirects to /


Next, I’ll update:

1. MovieDetails.tsx for trailer and rich movie info


2. UserProfile.tsx to include watchlist, reviews, and recommendations



Proceed?


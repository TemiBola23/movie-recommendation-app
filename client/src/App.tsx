import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieSearch from './components/MovieSearch';
// ... and other pages/components

const App: React.FC = () => (
  <div className="bg-gray-100 min-h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<MovieSearch />} />
      {/* Define other routes */}
    </Routes>
  </div>
);
export default App;

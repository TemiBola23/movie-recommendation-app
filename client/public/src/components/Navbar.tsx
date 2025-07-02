// client/src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // using Lucide icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-700 text-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold tracking-tight">
            🎬 MovieApp
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">
              Discover
            </Link>
            <Link to="/watchlist" className="hover:text-gray-200">
              Watchlist
            </Link>
            <Link to="/profile" className="hover:text-gray-200">
              Profile
            </Link>
            <Link to="/login" className="hover:text-gray-200">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleNav}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu items */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-3 pb-4">
            <Link to="/" onClick={toggleNav} className="hover:text-gray-200">
              Discover
            </Link>
            <Link
              to="/watchlist"
              onClick={toggleNav}
              className="hover:text-gray-200"
            >
              Watchlist
            </Link>
            <Link
              to="/profile"
              onClick={toggleNav}
              className="hover:text-gray-200"
            >
              Profile
            </Link>
            <Link
              to="/login"
              onClick={toggleNav}
              className="hover:text-gray-200"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

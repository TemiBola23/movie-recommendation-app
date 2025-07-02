import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
            navigate('/login');
              };

                return (
                    <nav className="bg-white shadow p-4 flex justify-between items-center">
                          <div className="text-xl font-bold text-blue-600">
                                  <Link to="/">🎬 MovieApp</Link>
                                        </div>
                                              <div className="space-x-4">
                                                      <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                                                              <Link to="/watchlist" className="text-gray-700 hover:text-blue-500">Watchlist</Link>
                                                                      <Link to="/profile" className="text-gray-700 hover:text-blue-500">Profile</Link>
                                                                              {localStorage.getItem('token') ? (
                                                                                        <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
                                                                                                ) : (
                                                                                                          <>
                                                                                                                      <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
                                                                                                                                  <Link to="/register" className="text-gray-700 hover:text-blue-500">Register</Link>
                                                                                                                                            </>
                                                                                                                                                    )}
                                                                                                                                                          </div>
                                                                                                                                                              </nav>
                                                                                                                                                                );
                                                                                                                                                                };

                                                                                                                                                                export default Navbar;import React from 'react';
                                                                                                                                                                import { Link, useNavigate } from 'react-router-dom';

                                                                                                                                                                const Navbar: React.FC = () => {
                                                                                                                                                                  const navigate = useNavigate();

                                                                                                                                                                    const handleLogout = () => {
                                                                                                                                                                        localStorage.removeItem('token');
                                                                                                                                                                            navigate('/login');
                                                                                                                                                                              };

                                                                                                                                                                                return (
                                                                                                                                                                                    <nav className="bg-white shadow p-4 flex justify-between items-center">
                                                                                                                                                                                          <div className="text-xl font-bold text-blue-600">
                                                                                                                                                                                                  <Link to="/">🎬 MovieApp</Link>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                              <div className="space-x-4">
                                                                                                                                                                                                                      <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                                                                                                                                                                                                                              <Link to="/watchlist" className="text-gray-700 hover:text-blue-500">Watchlist</Link>
                                                                                                                                                                                                                                      <Link to="/profile" className="text-gray-700 hover:text-blue-500">Profile</Link>
                                                                                                                                                                                                                                              {localStorage.getItem('token') ? (
                                                                                                                                                                                                                                                        <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
                                                                                                                                                                                                                                                                ) : (
                                                                                                                                                                                                                                                                          <>
                                                                                                                                                                                                                                                                                      <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
                                                                                                                                                                                                                                                                                                  <Link to="/register" className="text-gray-700 hover:text-blue-500">Register</Link>
                                                                                                                                                                                                                                                                                                            </>
                                                                                                                                                                                                                                                                                                                    )}
                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                              </nav>
                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                };

                                                                                                                                                                                                                                                                                                                                export default Navbar;
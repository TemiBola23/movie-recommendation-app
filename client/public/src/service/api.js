// api.js const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export const register = async (data) => { const res = await fetch(${BASE_URL}/api/auth/register, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), }); return res.json(); };

export const login = async (data) => { const res = await fetch(${BASE_URL}/api/auth/login, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), }); return res.json(); };

export const getUserProfile = async (token) => { const res = await fetch(${BASE_URL}/api/users/profile, { headers: { Authorization: Bearer ${token}, }, }); return res.json(); };

export const searchMovies = async (query, page = 1) => { const res = await fetch(${BASE_URL}/api/movies/search?query=${encodeURIComponent(query)}&page=${page}); return res.json(); };

export const getMovieDetails = async (id) => { const res = await fetch(${BASE_URL}/api/movies/details/${id}); return res.json(); };

export const addToWatchlist = async (movie, token) => { const res = await fetch(${BASE_URL}/api/users/watchlist, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: Bearer ${token}, }, body: JSON.stringify(movie), }); return res.json(); };

export const removeFromWatchlist = async (id, token) => { const res = await fetch(${BASE_URL}/api/users/watchlist/${id}, { method: 'DELETE', headers: { Authorization: Bearer ${token}, }, }); return res.json(); };

export const getRecommendations = async (token) => { const res = await fetch(${BASE_URL}/api/movies/recommendations, { headers: { Authorization: Bearer ${token}, }, }); return res.json(); };

export const submitReview = async (movieId, review, token) => { const res = await fetch(${BASE_URL}/api/reviews/${movieId}, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: Bearer ${token}, }, body: JSON.stringify(review), }); return res.json(); };


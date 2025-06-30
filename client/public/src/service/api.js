import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// TMDB integration
export const searchMovies = (query, page = 1) =>
  api.get(`/tmdb/search?query=${encodeURIComponent(query)}&page=${page}`);

export const discoverMovies = (queryParams, page = 1) =>
  api.get(`/tmdb/discover?${queryParams}&page=${page}`);

// Auth
export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);
export const getProfile = (token) =>
  api.get('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });

// Reviews
export const submitReview = (data, token) =>
  api.post('/reviews', data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getMovieReviews = (movieId) =>
  api.get(`/reviews/movie/${movieId}`);

export const getUserReviews = (token) =>
  api.get('/reviews/user', {
    headers: { Authorization: `Bearer ${token}` },
  });

export default api;

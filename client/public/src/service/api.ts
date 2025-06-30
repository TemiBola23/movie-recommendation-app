import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api',
});

export const register = (data: any) => API.post('/auth/register', data);
export const login = (data: any) => API.post('/auth/login', data);
export const getProfile = (token: string) =>
  API.get('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });

export const searchMovies = (query: string) =>
  API.get(`/movies/search?query=${encodeURIComponent(query)}`);
export const discoverMovies = (params = '') =>
  API.get(`/movies/discover${params ? `?${params}` : ''}`);
export const getMovieDetails = (id: number) =>
  API.get(`/movies/${id}`);
export const getRecommendations = (token: string) =>
  API.get('/movies/recommendations', {
    headers: { Authorization: `Bearer ${token}` },
  });

export const submitReview = (data: any, token: string) =>
  API.post('/reviews', data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getMovieReviews = (movieId: number) =>
  API.get(`/reviews/movie/${movieId}`);
export const getUserReviews = (token: string) =>
  API.get('/reviews/user', {
    headers: { Authorization: `Bearer

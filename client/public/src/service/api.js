import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getUserProfile = async (token) => {
  const res = await fetch(`${BASE_URL}/api/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const searchMovies = async (query, page = 1) => {
  const res = await fetch(`${BASE_URL}/api/movies/search?query=${encodeURIComponent(query)}&page=${page}`);
  return res.json();
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/api/movies/details/${id}`);
  return res.json();
};

export const addToWatchlist = async (movie, token) => {
  const res = await fetch(`${BASE_URL}/api/users/watchlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movie),
  });
  return res.json();
};

export const removeFromWatchlist = async (id, token) => {
  const res = await fetch(`${BASE_URL}/api/users/watchlist/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const getRecommendations = async (token) => {
  const res = await fetch(`${BASE_URL}/api/movies/recommendations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const submitReview = async (movieId, review, token) => {
  const res = await fetch(`${BASE_URL}/api/reviews/${movieId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(review),
  });
  return res.json();
};

export const getReviewsByMovie = async (movieId) => {
  const res = await fetch(`${BASE_URL}/api/reviews/movie/${movieId}`);
  return res.json();
};

export const followUser = async (userId, token) => {
  const res = await fetch(`${BASE_URL}/api/users/follow/${userId}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const shareWatchlist = async (token) => {
  const res = await fetch(`${BASE_URL}/api/useconst BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export const register = async (data) => {
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const login = async (data) => {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getUserProfile = async (token) => {
  const res = await fetch(`${BASE_URL}/api/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const searchMovies = async (query, page = 1) => {
  const res = await fetch(`${BASE_URL}/api/movies/search?query=${encodeURIComponent(query)}&page=${page}`);
  return res.json();
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/api/movies/details/${id}`);
  return res.json();
};

export const addToWatchlist = async (movie, token) => {
  const res = await fetch(`${BASE_URL}/api/users/watchlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movie),
  });
  return res.json();
};

export const removeFromWatchlist = async (id, token) => {
  const res = await fetch(`${BASE_URL}/api/users/watchlist/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const getRecommendations = async (token) => {
  const res = await fetch(`${BASE_URL}/api/movies/recommendations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const submitReview = async (movieId, review, token) => {
  const res = await fetch(`${BASE_URL}/api/reviews/${movieId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(review),
  });
  return res.json();
};

export const getReviewsByMovie = async (movieId) => {
  const res = await fetch(`${BASE_URL}/api/reviews/movie/${movieId}`);
  return res.json();
};

export const followUser = async (userId, token) => {
  const res = await fetch(`${BASE_URL}/api/users/follow/${userId}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const shareWatchlist = async (token) => {
  const res = await fetch(`${BASE_URL}/api/users/share`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};


rs/share`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};


E_URL}/api/users/share`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};


✅ api.js has been fully regenerated with support for:

🔐 JWT-authenticated actions (register, login, watchlist)

🔍 Search with pagination

🎥 Trailer and movie detail fetching

🧠 Personalized recommendations

📝 Submit and fetch reviews

🤝 Social features: follow users and share watchlist


Ready for MovieDetails.tsx and UserProfile.tsx updates?


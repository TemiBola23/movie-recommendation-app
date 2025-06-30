const axios = require('axios');
const User = require('../models/User');

const TMDB_BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

exports.search = async (req, res) => {
  try {
    const { query, genre, sort_by, page = 1 } = req.query;
    const url = query
      ? `${TMDB_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
      : `${TMDB_BASE}/discover/movie?api_key=${API_KEY}&sort_by=${sort_by || 'popularity.desc'}&with_genres=${genre || ''}&page=${page}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch {
    res.status(500).json({ message: 'Movie search failed' });
  }
};

exports.details = async (req, res) => {
  try {
    const movieId = req.params.id;
    const response = await axios.get(`${TMDB_BASE}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`);
    res.json(response.data);
  } catch {
    res.status(500).json({ message: 'Movie details failed' });
  }
};

exports.recommendations = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const watchlistMovies = user.watchlists.flatMap((list) => list.movies);

    if (watchlistMovies.length === 0) return res.json({ results: [] });

    const randomMovie = watchlistMovies[Math.floor(Math.random() * watchlistMovies.length)];

    const response = await axios.get(`${TMDB_BASE}/movie/${randomMovie}/recommendations?api_key=${API_KEY}`);
    res.json(response.data);
  } catch {
    res.status(500).json({ message: 'Recommendations failed' });
  }
};

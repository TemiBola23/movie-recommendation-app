const axios = require('axios');
const Review = require('../models/Review');
const User = require('../models/User');

const TMDB_API = 'https://api.themoviedb.org/3';
const TMDB_KEY = process.env.TMDB_API_KEY;

// Search movies by title, genre, etc.
exports.searchMovies = async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`${TMDB_API}/search/movie`, {
      params: {
        api_key: TMDB_KEY,
        query
      }
    });
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};

// Discover trending/popular movies
exports.discoverMovies = async (req, res) => {
  const { genre, sort_by = 'popularity.desc', page = 1 } = req.query;

  try {
    const response = await axios.get(`${TMDB_API}/discover/movie`, {
      params: {
        api_key: TMDB_KEY,
        with_genres: genre,
        sort_by,
        page
      }
    });
    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to discover movies' });
  }
};

// Get detailed movie information
exports.getMovieDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${TMDB_API}/movie/${id}`, {
      params: { api_key: TMDB_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get movie details' });
  }
};

// Get personalized recommendations
exports.getRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const reviewScores = await Review.find({ user: user._id }).sort('-rating').limit(5);
    const topMovies = reviewScores.map(r => r.movie).slice(0, 3);
    const favorites = user.favorites.slice(0, 3);

    const ids = [...new Set([...topMovies, ...favorites])];

    const promises = ids.map(id =>
      axios.get(`${TMDB_API}/movie/${id}/recommendations`, {
        params: { api_key: TMDB_KEY }
      })
    );

    const results = (await Promise.all(promises))
      .flatMap(res => res.data.results)
      .slice(0, 12);

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
};

const axios = require('axios');
const User = require('../models/User');
const Watchlist = require('../models/Watchlist');

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

exports.searchMovies = async (req, res) => {
  try {
    const { query, genre, rating, year, page = 1 } = req.query;
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query,
        with_genres: genre,
        'vote_average.gte': rating,
        primary_release_year: year,
        page
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch movies', error: err.message });
  }
};

exports.getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
      params: { api_key: TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch movie details', error: err.message });
  }
};

exports.getRecommendations = async (req, res) => {
  try {
    const userId = req.user.id;
    const watchlist = await Watchlist.find({ user: userId });
    const genreCount = {};

    watchlist.forEach((item) => {
      (item.genres || []).forEach((genre) => {
        genreCount[genre] = (genreCount[genre] || 0) + 1;
      });
    });

    const favoriteGenre = Object.keys(genreCount).sort((a, b) => genreCount[b] - genreCount[a])[0];
    const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        with_genres: favoriteGenre,
        sort_by: 'popularity.desc'
      }
    });

    res.json(response.data.results);
  } catch (err) {
    res.status(500).json({ message: 'Recommendation failed', error: err.message });
  }
};

const express = require('express');
const router = express.Router();
const {
  searchMovies,
  discoverMovies,
  getMovieDetails,
  getRecommendations
} = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.get('/search', searchMovies);
router.get('/discover', discoverMovies);
router.get('/:id', getMovieDetails);

// Authenticated route
router.get('/recommendations', authMiddleware, getRecommendations);

module.exports = router;

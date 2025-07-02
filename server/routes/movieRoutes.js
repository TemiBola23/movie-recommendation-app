const express = require('express');
const router = express.Router();
const { getMovies, getMovieDetails, getRecommendations, getFilteredMovies } = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getMovies);
router.get('/filter', getFilteredMovies);
router.get('/recommendations', authMiddleware, getRecommendations);
router.get('/:id', getMovieDetails);

module.exports = router;

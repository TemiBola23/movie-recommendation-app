const express = require('express');
const router = express.Router();
const {
  addReview,
  getReviewsByMovie,
  getUserReviews
} = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

// Public route to get all reviews for a specific movie
router.get('/movie/:movieId', getReviewsByMovie);

// Authenticated routes
router.post('/', authMiddleware, addReview);
router.get('/user', authMiddleware, getUserReviews);

module.exports = router;

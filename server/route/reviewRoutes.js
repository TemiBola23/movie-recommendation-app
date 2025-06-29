const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Review = require('../models/Review');

// Post a review
router.post('/', auth, async (req, res) => {
  try {
    const review = await Review.create({
      userId: req.user.id,
      movieId: req.body.movieId,
      rating: req.body.rating,
      comment: req.body.comment
    });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Error posting review' });
  }
});

// Get reviews for a movie
router.get('/:movieId', async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: req.params.movieId }).populate('userId', 'username');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

module.exports = router;

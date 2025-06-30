
const Review = require('../models/Review');

// Add a new review
exports.addReview = async (req, res) => {
  const { movie, rating, comment } = req.body;

  try {
    const review = new Review({
      user: req.user._id,
      movie,
      rating,
      comment
    });

    const saved = await review.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add review' });
  }
};

// Get all reviews for a specific movie
exports.getReviewsByMovie = async (req, res) => {
  const { movieId } = req.params;

  try {
    const reviews = await Review.find({ movie: movieId })
      .populate('user', 'username')
      .sort('-createdAt');

    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

//

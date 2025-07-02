const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const { movieId, rating, comment } = req.body;
    const review = await Review.create({ user: req.user.id, movieId, rating, comment });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create review', error: err.message });
  }
};

exports.getMovieReviews = async (req, res) => {
  try {
    const { movieId } = req.params;
    const reviews = await Review.find({ movieId }).populate('user', 'username');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch reviews', error: err.message });
  }
};

exports.getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.user.id });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user reviews', error: err.message });
  }
};

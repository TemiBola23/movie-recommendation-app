const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const { movieId, rating, comment } = req.body;
  try {
    const review = new Review({
      user: req.user.id,
      movieId,
      rating,
      comment,
    });
    await review.save();
    res.status(201).json({ message: 'Review saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit review' });
  }
};

exports.getMovieReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: req.params.movieId }).populate('user', 'username');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get reviews' });
  }
};

exports.getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.user.id });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user reviews' });
  }
};

const Review = require('../models/Review');
const User = require('../models/User');

exports.create = async (req, res) => {
  try {
    const { id: movieId } = req.params;
    const { rating, comment } = req.body;
    const review = await Review.create({
      movieId,
      user: req.user.id,
      rating,
      comment,
    });
    res.status(201).json(review);
  } catch {
    res.status(500).json({ message: 'Review submission failed' });
  }
};

exports.getByMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    const reviews = await Review.find({ movieId }).populate('user', 'username');
    res.json(reviews);
  } catch {
    res.status(500).json({ message: 'Fetch reviews failed' });
  }
};

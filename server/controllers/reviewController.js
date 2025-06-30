const Review = require('../models/Review');

exports.create = async (req, res) => {
  const { id: movieId } = req.params;
  const { rating, comment } = req.body;

  try {
    const review = await Review.create({
      movieId,
      user: req.user.id,
      rating,
      comment
    });

    res.status(201).json(review);
  } catch {
    res.status(500).json({ message: 'Review creation failed' });
  }
};

exports.getByMovie = async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: req.params.movieId }).populate('user', 'username');
    res.json(reviews);
  } catch {
    res.status(500).json({ message: 'Fetching reviews failed' });
  }
};

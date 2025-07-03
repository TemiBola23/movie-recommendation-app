import Review from '../models/Review.js';

export const addReview = async (req, res) => {
  try {
    const { movie, rating, text } = req.body;
    const review = await Review.create({
      movie,
      rating,
      text,
      author: req.user._id
    });
    res.status(201).json(review);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getMovieReviews = async (req, res) => {
  try {
    const { tmdbId } = req.params;
    const reviews = await Review.find({ movie: tmdbId }).populate('author', 'username');
    res.json(reviews);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getUserReviews = async (req, res) => {
  try {
    const { userId } = req.params;
    const reviews = await Review.find({ author: userId }).populate('movie');
    res.json(reviews);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// Get user profile (redundant with /auth/profile, optional)
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load user profile' });
  }
});

// Add to favorites
router.post('/favorites', authMiddleware, async (req, res) => {
  const { movieId } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user.favorites.includes(movieId)) {
      user.favorites.push(movieId);
      await user.save();
    }
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add favorite' });
  }
});

// Add to watchlist
router.post('/watchlist', authMiddleware, async (req, res) => {
  const { movieId } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user.watchlist.includes(movieId)) {
      user.watchlist.push(movieId);
      await user.save();
    }
    res.json(user.watchlist);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add to watchlist' });
  }
});

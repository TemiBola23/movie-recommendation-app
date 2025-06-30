const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET /api/users/me
// @desc    Get current logged-in user's profile
// @access  Private
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   PUT /api/users/me
// @desc    Update user profile (e.g., username or email)
// @access  Private
router.put('/me', authMiddleware, async (req, res) => {
  const { username, email } = req.body;
  try {
    const updated = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { username, email } },
      { new: true }
    ).select('-password');

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
});

// Future expansion:
// Follow/unfollow users, get other profiles, etc.

module.exports = router;

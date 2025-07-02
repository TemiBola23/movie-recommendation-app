const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getUserProfile,
  followUser,
  unfollowUser,
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist
} = require('../controllers/userController');

router.get('/profile', authMiddleware, getUserProfile);
router.post('/follow/:userId', authMiddleware, followUser);
router.post('/unfollow/:userId', authMiddleware, unfollowUser);
router.get('/watchlist', authMiddleware, getWatchlist);
router.post('/watchlist/:movieId', authMiddleware, addToWatchlist);
router.delete('/watchlist/:movieId', authMiddleware, removeFromWatchlist);

module.exports = router;

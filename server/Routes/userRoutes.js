const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  followUser,
  unfollowUser,
  getUserWatchlists,
  createWatchlist,
  addMovieToWatchlist
} = require('../controllers/userController');

router.post('/follow/:id', authMiddleware, followUser);
router.post('/unfollow/:id', authMiddleware, unfollowUser);
router.get('/watchlists/:id', getUserWatchlists);
router.post('/watchlists', authMiddleware, createWatchlist);
router.post('/watchlists/add', authMiddleware, addMovieToWatchlist);

module.exports = router;

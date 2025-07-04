import express from 'express';
import { auth } from '../middleware/authMiddleware.js';
import {
  discover,
  search,
  getDetails,
  addToWatchlist,
  removeFromWatchlist,
  getWatchlist
} from '../controllers/movieController.js';

const router = express.Router();

router.get('/discover', discover);
router.get('/search', search);
router.get('/watchlist', auth, getWatchlist);
router.post('/watchlist', auth, addToWatchlist);
router.delete('/watchlist', auth, removeFromWatchlist);
router.get('/:tmdbId', getDetails);

export default router;

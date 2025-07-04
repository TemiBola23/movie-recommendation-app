import express from 'express';
import { auth } from '../middleware/authMiddleware.js';
import { addReview, getMovieReviews, getUserReviews } from '../controllers/reviewController.js';

const router = express.Router();

router.post('/', auth, addReview);
router.get('/movie/:tmdbId', getMovieReviews);
router.get('/user/:userId', getUserReviews);

export default router;
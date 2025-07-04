import express from 'express';
import { auth } from '../middleware/authMiddleware.js';
import { getProfile, followUser, unfollowUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/me', auth, getProfile);
router.get('/:id', getProfile);
router.post('/:id/follow', auth, followUser);
router.post('/:id/unfollow', auth, unfollowUser);

export default router;
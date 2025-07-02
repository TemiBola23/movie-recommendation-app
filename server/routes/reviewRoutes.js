const express = require('express');
const router = express.Router();
const { addReview, getReviews } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/:movieId', authMiddleware, addReview);
router.get('/:movieId', getReviews);

module.exports = router;

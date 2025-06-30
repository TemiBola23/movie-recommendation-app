const express = require('express');
const { create, getByMovie } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:id', authMiddleware, create);              // POST /api/reviews/:movieId
router.get('/movie/:movieId', getByMovie);                // GET /api/reviews/movie/:movieId

module.exports = router;

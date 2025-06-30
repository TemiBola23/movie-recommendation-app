const express = require('express');
const { search, details, recommendations } = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/search', search);                // /api/movies/search?query=&page=
router.get('/details/:id', details);          // /api/movies/details/:id
router.get('/recommendations', authMiddleware, recommendations);

module.exports = router;

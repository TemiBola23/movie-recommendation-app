const express = require('express');
const router = express.Router();
const { discoverMovies } = require('../controllers/movieController');

router.get('/discover', discoverMovies);
// Optionally add genre fetch, details, etc.

module.exports = router;

// server/routes/movieRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /api/movies/search?query=...
router.get('/search', async (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter' });
  }

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query,
      },
    });

    res.status(200).json(response.data.results);
  } catch (error) {
    console.error('TMDB fetch error:', error.message);
    res.status(500).json({ error: 'Failed to fetch movies from TMDB' });
  }
});

module.exports = router;

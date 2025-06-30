const express = require('express');
const router = express.Router();
const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Search by query
router.get('/search', async (req, res) => {
  try {
    const { query, page = 1 } = req.query;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'TMDB search failed' });
  }
});

// Discover movies
router.get('/discover', async (req, res) => {
  try {
    const { page = 1, ...filters } = req.query;
    const params = new URLSearchParams({
      api_key: TMDB_API_KEY,
      page,
      sort_by: filters.sort_by || 'popularity.desc',
      ...filters,
    });

    const url = `https://api.themoviedb.org/3/discover/movie?${params}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'TMDB discover failed' });
  }
});

module.exports = router;

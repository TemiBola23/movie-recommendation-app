const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;

exports.searchMovies = async (req, res) => {
  const { query, page = 1 } = req.query;
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to search TMDB' });
  }
};

exports.discoverMovies = async (req, res) => {
  const { page = 1, sort_by = 'popularity.desc', ...rest } = req.query;
  try {
    const url = `https://api.themoviedb.org/3/discover/movie`;
    const response = await axios.get(url, {
      params: { api_key: TMDB_API_KEY, sort_by, page, ...rest },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch TMDB discovery' });
  }
};

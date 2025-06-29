
const axios = require('axios');

// Existing search, details, genres...

// Discover movies with filters and pagination
const discoverMovies = async (req, res) => {
  const { genre, minRating, year, page = 1 } = req.query;
  const params = {
    api_key: process.env.TMDB_API_KEY,
    sort_by: 'popularity.desc',
    include_adult: false,
    page,
  };
  if (genre) params.with_genres = genre;
  if (minRating) params['vote_average.gte'] = minRating;
  if (year) {
    params['primary_release_date.gte'] = `${year}-01-01`;
    params['primary_release_date.lte'] = `${year}-12-31`;
  }
  try {
    const resp = await axios.get('https://api.themoviedb.org/3/discover/movie', { params });
    res.json({ results: resp.data.results, totalPages: resp.data.total_pages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Discover failed' });
  }
};

module.exports = { searchMovies, getMovieDetails, getGenres, discoverMovies };

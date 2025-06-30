const axios = require('axios');

const TMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: process.env.TMDB_API_KEY, language: 'en-US' },
});

exports.search = async (req, res) => {
  try {
    const { query, page = 1 } = req.query;
    const endpoint = query ? '/search/movie' : '/discover/movie';
    const params = { page };
    if (query) params.query = query;

    const tmdbRes = await TMDB.get(endpoint, { params });
    res.json({
      movies: tmdbRes.data.results,
      totalPages: tmdbRes.data.total_pages,
    });
  } catch (err) {
    res.status(500).json({ message: 'Search failed' });
  }
};

exports.details = async (req, res) => {
  try {
    const { id } = req.params;
    const tmdbRes = await TMDB.get(`/movie/${id}`, {
      params: { append_to_response: 'videos,credits' },
    });
    const movie = tmdbRes.data;
    const trailer = movie.videos?.results.find(
      (v) => v.site === 'YouTube' && v.type === 'Trailer'
    )?.key;
    res.json({ ...movie, trailer });
  } catch {
    res.status(500).json({ message: 'Fetch details failed' });
  }
};

exports.recommendations = async (req, res) => {
  try {
    const userId = req.user.id;
    const watchedRes = await TMDB.get('/discover/movie', {
      params: { sort_by: 'popularity.desc', page: 1 },
    });
    const recs = watchedRes.data.results.slice(0, 10);
    res.json(recs);
  } catch {
    res.status(500).json({ message: 'Recs failed' });
  }
};

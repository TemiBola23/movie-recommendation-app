import fetch from 'node-fetch';
import User from '../models/User.js';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovie = async (path, params = '') => {
  const url = `${TMDB_BASE_URL}${path}?api_key=${process.env.TMDB_API_KEY}&${params}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('TMDB Error');
  return res.json();
};

export const discover = async (req, res) => {
  try {
    // Use genres from user watchlist/preferences in real app
    const data = await fetchMovie('/discover/movie', 'sort_by=popularity.desc');
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const search = async (req, res) => {
  try {
    const { query } = req.query;
    const data = await fetchMovie('/search/movie', `query=${encodeURIComponent(query)}`);
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getDetails = async (req, res) => {
  try {
    const { tmdbId } = req.params;
    const data = await fetchMovie(`/movie/${tmdbId}`, 'append_to_response=videos,credits');
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const addToWatchlist = async (req, res) => {
  try {
    const { tmdbId } = req.body;
    const user = await User.findById(req.user._id);
    if (!user.watchlist.includes(tmdbId)) {
      user.watchlist.push(tmdbId);
      await user.save();
    }
    res.json({ watchlist: user.watchlist });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const removeFromWatchlist = async (req, res) => {
  try {
    const { tmdbId } = req.body;
    const user = await User.findById(req.user._id);
    user.watchlist = user.watchlist.filter(id => id !== tmdbId);
    await user.save();
    res.json({ watchlist: user.watchlist });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getWatchlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ watchlist: user.watchlist });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
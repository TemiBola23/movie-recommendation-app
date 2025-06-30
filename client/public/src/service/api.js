// api.ts
const BACKEND_API = process.env.NEXT_PUBLIC_API_URL;
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (
  query: string,
  filters: { genre?: string; rating?: string; year?: string }
) => {
  const searchParam = query ? `&query=${query}` : '';
  const genreParam = filters.genre ? `&with_genres=${filters.genre}` : '';
  const ratingParam = filters.rating ? `&vote_average.gte=${filters.rating}` : '';
  const yearParam = filters.year ? `&primary_release_year=${filters.year}` : '';

  const url = `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc${searchParam}${genreParam}${ratingParam}${yearParam}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results || [];
};

export const fetchMovieDetails = async (id: number) => {
  const url = `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos`;
  const res = await fetch(url);
  return await res.json();
};

export const registerUser = async (credentials: any) => {
  const res = await fetch(`${BACKEND_API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return await res.json();
};

export const loginUser = async (credentials: any) => {
  const res = await fetch(`${BACKEND_API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return await res.json();
};

export const fetchWatchlist = async (token: string) => {
  const res = await fetch(`${BACKEND_API}/user/watchlist`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await res.json();
};

export const addToWatchlist = async (token: string, movie: any) => {
  const res = await fetch(`${BACKEND_API}/user/watchlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movie),
  });
  return await res.json();
};

"use client";
import React, { useEffect, useState } from "react";
import API from "../services/api";
import MovieCard from "./MovieCard";

export default function WatchlistManager() {
  const [watchlist, setWatchlist] = useState<number[]>([]);
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    API.get("/movies/me/watchlist")
      .then((res) => setWatchlist(res.data.watchlist))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const out: any[] = [];
      for (const id of watchlist) {
        try {
          const res = await API.get(`/movies/${id}`);
          out.push(res.data);
        } catch {}
      }
      setMovies(out);
    };
    if (watchlist.length) fetchMovies();
  }, [watchlist]);

  if (!watchlist.length)
    return <div className="my-8 text-center">Your watchlist is empty.</div>;

  return (
    <div>
      <h2 className="text-xl mb-3 font-semibold">Your Watchlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
}
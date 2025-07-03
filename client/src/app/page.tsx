"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieSearch from "../components/MovieSearch";
import Pagination from "../components/Pagination";
import { useAuth } from "../context/AuthContext";
import API from "../services/api";

export default function Home() {
  const { user } = useAuth();
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await API.get("/movies/discover", { params: { page } });
      setMovies(res.data.results);
      setTotalPages(res.data.total_pages);
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchMovies();
  }, [user, page]);

  if (!user)
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Welcome!</h2>
        <p className="mt-3">Please login or register to get personalized movie recommendations.</p>
      </div>
    );

  return (
    <div>
      <MovieSearch onResults={setMovies} />
      <h2 className="mt-6 mb-2 text-xl font-semibold">Recommended For You</h2>
      {loading && <div>Loading...</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}
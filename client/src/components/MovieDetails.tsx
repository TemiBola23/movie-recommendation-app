"use client";
import React, { useEffect, useState } from "react";
import API from "../services/api";
import ReviewForm from "./ReviewForm";
import { useAuth } from "../context/AuthContext";

export default function MovieDetails({ tmdbId }: { tmdbId: string }) {
  const [movie, setMovie] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [inWatchlist, setInWatchlist] = useState(false);

  const { user } = useAuth();

  const fetchMovie = async () => {
    const res = await API.get(`/movies/${tmdbId}`);
    setMovie(res.data);
  };

  const fetchReviews = async () => {
    const res = await API.get(`/reviews/movie/${tmdbId}`);
    setReviews(res.data);
  };

  useEffect(() => {
    fetchMovie();
    fetchReviews();
    API.get("/movies/me/watchlist").then((res) => {
      setInWatchlist(res.data.watchlist.includes(Number(tmdbId)));
    });
  }, [tmdbId]);

  const handleWatchlist = async () => {
    if (inWatchlist) {
      await API.post("/movies/me/watchlist/remove", { tmdbId: Number(tmdbId) });
      setInWatchlist(false);
    } else {
      await API.post("/movies/me/watchlist/add", { tmdbId: Number(tmdbId) });
      setInWatchlist(true);
    }
  };

  if (!movie) return <div>Loading...</div>;

  const trailer = movie.videos?.results?.find((v: any) => v.type === "Trailer" && v.site === "YouTube");

  return (
    <div className="mt-6 flex flex-col md:flex-row gap-8">
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        className="rounded w-80"
        alt={movie.title}
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="mb-2">{movie.overview}</p>
        <div className="mb-2">
          <strong>Release:</strong> {movie.release_date} &nbsp;
          <strong>Rating:</strong> {movie.vote_average}
        </div>
        {user && (
          <button
            onClick={handleWatchlist}
            className={`px-4 py-2 rounded mb-4 ${
              inWatchlist ? "bg-red-500" : "bg-yellow-500"
            } text-white font-semibold`}
          >
            {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        )}

        {trailer && (
          <div className="my-4">
            <iframe
              width="350"
              height="200"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="Trailer"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <h3 className="font-bold mt-6 mb-2">Reviews</h3>
        <div className="space-y-3">
          {reviews.length === 0 && <div>No reviews yet.</div>}
          {reviews.map((r) => (
            <div key={r._id} className="bg-gray-100 rounded p-2">
              <div>
                <span className="font-semibold">{r.author?.username || "User"}</span>{" "}
                <span className="text-yellow-600">★ {r.rating}</span>
              </div>
              <div>{r.text}</div>
            </div>
          ))}
        </div>
        {user && <ReviewForm tmdbId={Number(tmdbId)} onSuccess={fetchReviews} />}
      </div>
    </div>
  );
}
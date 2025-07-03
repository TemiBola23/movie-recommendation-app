"use client";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: any }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "/no-image.png";

  return (
    <div className="bg-white rounded shadow p-2 flex flex-col h-full">
      <Link href={`/movie/${movie.id}`}>
        <img src={posterUrl} alt={movie.title} className="rounded w-full h-60 object-cover" />
        <h3 className="font-semibold text-lg mt-2">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.release_date}</p>
      </Link>
    </div>
  );
}
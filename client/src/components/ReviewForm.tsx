"use client";
import React, { useState } from "react";
import API from "../services/api";

export default function ReviewForm({ tmdbId, onSuccess }: { tmdbId: number; onSuccess: () => void }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(7);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await API.post("/reviews", { movie: tmdbId, text, rating });
      setText("");
      setRating(7);
      onSuccess();
    } catch (e: any) {
      setError(e?.response?.data?.message || "Failed to submit review");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-gray-100 p-4 rounded">
      <h4 className="font-semibold mb-2">Write a Review</h4>
      {error && <div className="text-red-600 mb-1">{error}</div>}
      <textarea
        className="w-full border rounded p-2 mb-2"
        placeholder="Your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <div className="flex items-center gap-2">
        <span>Rating:</span>
        <input
          className="border rounded px-2 py-1 w-16"
          type="number"
          min={0}
          max={10}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <button className="ml-auto bg-yellow-500 text-white px-4 py-1 rounded" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
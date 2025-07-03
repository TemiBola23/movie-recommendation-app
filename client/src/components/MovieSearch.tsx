"use client";
import React, { useState } from "react";
import API from "../services/api";

export default function MovieSearch({ onResults }: { onResults: (results: any[]) => void }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.get("/movies/search", { params: { query } });
      onResults(res.data.results);
    } catch {}
    setLoading(false);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-4">
      <input
        className="border rounded px-2 py-1 flex-1"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-yellow-500 px-4 py-1 rounded text-white font-semibold" type="submit" disabled={loading}>
        Search
      </button>
    </form>
  );
}
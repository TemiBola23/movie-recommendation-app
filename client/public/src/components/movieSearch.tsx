'use client';

import React, { useEffect, useState } from 'react';
import { searchMovies, discoverMovies } from '../services/api';
import { useNavigate } from 'react-router-dom';

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState('popularity.desc');
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) {
      fetchDiscover();
    }
  }, [genre, sort]);

  const fetchDiscover = async () => {
    try {
      const params = new URLSearchParams();
      if (genre) params.append('genre', genre);
      if (sort) params.append('sort_by', sort);
      const res = await discoverMovies(params.toString());
      setMovies(res.data);
    } catch (err) {
      console.error('Discovery failed', err);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await searchMovies(query);
      setMovies(res.data);
    } catch (err) {
      console.error('Search failed', err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">🎬 Movie Discovery</h1>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="

'use client';

import React, { useState } from 'react';
import { submitReview } from '../services/api';

interface ReviewFormProps {
  movieId: number;
  token: string;
  onSuccess?: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ movieId, token, onSuccess }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !comment)

// MovieDetails.tsx
import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../services/api';

interface Props {
  movieId: number;
}

const MovieDetails: React.FC<Props> = ({ movieId }) => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Failed to load movie details:', error);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  if (loading) return <p>Loading movie details...</p>;
  if (!movie) return <p>No details available.</p>;

  const trailer = movie.videos?.results?.find(
    (vid: any) => vid.type === 'Trailer' && vid.site === 'YouTube'
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{movie.title}</h2>
      <p className="mb-2 text-gray-600">{movie.overview}</p>
      <p className="text-sm text-gray-400">Release Date: {movie.release_date}</p>
      {trailer && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Watch Trailer:</h3>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

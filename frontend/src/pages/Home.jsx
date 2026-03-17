import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Home = () => {
  // State to hold our movies once they arrive from the backend
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect runs automatically when the homepage loads
  useEffect(() => {
    const fetchLatestMovies = async () => {
      try {
        // This calls your actual backend API!
        const response = await axios.get('/api/movies');
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchLatestMovies();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-green-500 pl-3">
          Latest African Media
        </h1>
        <p className="mt-2 text-gray-600">Discover and review the best content from across the continent.</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-500 mt-10">Loading media...</div>
      ) : (
        /* Tailwind Grid: 1 column on mobile, 2 on tablets, 4 on desktop */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
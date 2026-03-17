import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
      {/* Placeholder for an actual movie poster image later */}
      <div className="h-64 bg-gray-700 flex items-center justify-center">
        <span className="text-gray-500 font-medium tracking-widest uppercase">Poster</span>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-1 truncate">{movie.title}</h3>
        <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
          <span>{movie.africanCountry}</span>
          <span>{movie.releaseYear}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded font-bold">
            ★ {movie.averageRating.toFixed(1)}
          </span>
          <Link 
            to={`/movies/${movie._id}`} 
            className="text-green-400 hover:text-green-300 text-sm font-medium"
          >
            View Reviews &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
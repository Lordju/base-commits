import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-wider text-green-400">
              AFRICAN MEDIA
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/movies" className="hover:text-green-400 transition duration-300">
              Movies
            </Link>
            <Link to="/books" className="hover:text-green-400 transition duration-300">
              Books
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <Link to="/login" className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md font-medium transition duration-300">
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
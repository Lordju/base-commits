const Movie = require('../models/Movie');

// @desc    Get all movies (or filter by country)
// @route   GET /api/movies
// @access  Public
const getMovies = async (req, res) => {
  try {
    // If the frontend asks for a specific country, filter by it
    const filter = req.query.country ? { africanCountry: req.query.country } : {};
    
    const movies = await Movie.find(filter);
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error fetching movies' });
  }
};

// @desc    Get a single movie by ID
// @route   GET /api/movies/:id
// @access  Public
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error fetching movie details' });
  }
};

module.exports = { getMovies, getMovieById };
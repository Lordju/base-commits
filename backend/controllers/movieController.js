const Movie = require('../models/Movie');

const getMovies = async (req, res) => {
  try {
    const filter = req.query.country ? { africanCountry: req.query.country } : {};
    const movies = await Movie.find(filter);
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error fetching movies' });
  }
};

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

// @desc    Create a new movie
// @route   POST /api/movies
// @access  Private (Requires login)
const createMovie = async (req, res) => {
  try {
    const { title, africanCountry, director, releaseYear, genres, description } = req.body;

    const movie = new Movie({
      title,
      africanCountry,
      director,
      releaseYear,
      genres,
      description
    });

    const createdMovie = await movie.save();
    res.status(201).json(createdMovie);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid movie data received' });
  }
};

module.exports = { getMovies, getMovieById, createMovie };
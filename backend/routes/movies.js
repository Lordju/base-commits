const express = require('express');
const router = express.Router();
const { getMovies, getMovieById, createMovie } = require('../controllers/movieController');
const { protect } = require('../middleware/authMiddleware');

// Map the routes to the controller functions
router.route('/')
  .get(getMovies)
  .post(protect, createMovie); // Requires a valid JWT token to access

router.route('/:id')
  .get(getMovieById);

module.exports = router;
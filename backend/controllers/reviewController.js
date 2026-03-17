const Review = require('../models/Review');

const getReviews = async (req, res) => {
  try {
    const filter = {};
    if (req.query.movieId) filter.movie = req.query.movieId;
    if (req.query.bookId) filter.book = req.query.bookId;

    const reviews = await Review.find(filter)
      .populate('user', 'username')
      .sort({ createdAt: -1 });
      
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error fetching reviews' });
  }
};

// @desc    Create a new review
// @route   POST /api/reviews
// @access  Private (Requires login)
const createReview = async (req, res) => {
  try {
    const { movieId, bookId, rating, comment } = req.body;

    // Ensure the user is reviewing *something*
    if (!movieId && !bookId) {
      return res.status(400).json({ message: 'Please provide a movie or book to review' });
    }

    const review = new Review({
      user: req.user._id, // Securely grabbed from the logged-in user's token
      movie: movieId || null,
      book: bookId || null,
      rating,
      comment
    });

    const createdReview = await review.save();
    res.status(201).json(createdReview);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid review data received' });
  }
};

module.exports = { getReviews, createReview };
const Review = require('../models/Review');

// @desc    Get reviews for a specific movie or book
// @route   GET /api/reviews
// @access  Public
const getReviews = async (req, res) => {
  try {
    const filter = {};
    
    // Check if the frontend is asking for movie reviews or book reviews
    if (req.query.movieId) filter.movie = req.query.movieId;
    if (req.query.bookId) filter.book = req.query.bookId;

    // .populate() grabs the username of the person who wrote it
    // .sort({ createdAt: -1 }) shows the newest reviews first
    const reviews = await Review.find(filter)
      .populate('user', 'username')
      .sort({ createdAt: -1 });
      
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error fetching reviews' });
  }
};

module.exports = { getReviews };
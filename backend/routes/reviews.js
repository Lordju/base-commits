const express = require('express');
const router = express.Router();
const { getReviews, createReview } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

// Map the routes to the controller functions
router.route('/')
  .get(getReviews)
  .post(protect, createReview); // Only logged-in users can post a review

module.exports = router;
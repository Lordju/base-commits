const express = require('express');
const router = express.Router();
const { getBooks, getBookById, createBook } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

// Map the routes to the controller functions
router.route('/')
  .get(getBooks)
  .post(protect, createBook); // Only logged-in users can post a new book

router.route('/:id')
  .get(getBookById);

module.exports = router;
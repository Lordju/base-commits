const Book = require('../models/Book');

// @desc    Get all books (or filter by country)
// @route   GET /api/books
// @access  Public
const getBooks = async (req, res) => {
  try {
    // If the frontend asks for a specific country, filter by it
    const filter = req.query.country ? { africanCountry: req.query.country } : {};
    
    const books = await Book.find(filter);
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error fetching books' });
  }
};

// @desc    Get a single book by ID
// @route   GET /api/books/:id
// @access  Public
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error fetching book details' });
  }
};

module.exports = { getBooks, getBookById };
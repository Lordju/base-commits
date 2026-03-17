const Book = require('../models/Book');

const getBooks = async (req, res) => {
  try {
    const filter = req.query.country ? { africanCountry: req.query.country } : {};
    const books = await Book.find(filter);
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error fetching books' });
  }
};

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

// @desc    Create a new book
// @route   POST /api/books
// @access  Private (Requires login)
const createBook = async (req, res) => {
  try {
    const { title, author, africanCountry, publicationYear, genres, description } = req.body;

    const book = new Book({
      title,
      author,
      africanCountry,
      publicationYear,
      genres,
      description
    });

    const createdBook = await book.save();
    res.status(201).json(createdBook);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid book data received' });
  }
};

module.exports = { getBooks, getBookById, createBook };
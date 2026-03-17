const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true
  },
  africanCountry: {
    type: String,
    required: true,
    index: true // Helps filter books by country efficiently
  },
  publicationYear: {
    type: Number
  },
  genres: [{
    type: String
  }],
  description: {
    type: String,
    required: true
  },
  averageRating: {
    type: Number,
    default: 0
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);

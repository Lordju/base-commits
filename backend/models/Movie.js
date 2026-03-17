const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true 
  },
  africanCountry: { 
    type: String, 
    required: true,
    index: true // Helps with filtering movies by country later
  }, 
  director: { 
    type: String,
    required: true
  },
  releaseYear: { 
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
  timestamps: true // Automatically adds createdAt and updatedAt dates
});

module.exports = mongoose.model('Movie', movieSchema);

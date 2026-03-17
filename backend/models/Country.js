const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  region: {
    type: String,
    enum: ['North Africa', 'West Africa', 'Central Africa', 'East Africa', 'Southern Africa'],
    required: true
  },
  flagUrl: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Country', countrySchema);

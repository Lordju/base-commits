const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Route Imports
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movies');
const bookRoutes = require('./routes/books');
const reviewRoutes = require('./routes/reviews');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware to parse JSON data from requests
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/african-media-review')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB Connection Error: ', err));

// Mount the Routes
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/reviews', reviewRoutes);

// Basic route for testing the server
app.get('/', (req, res) => {
  res.send('African Media Review API is running...');
});

// Define Port and Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
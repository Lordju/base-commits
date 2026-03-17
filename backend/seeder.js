const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Country = require('./models/Country');
const countriesData = require('./data/countries');

// Load environment variables (to get your MongoDB connection string)
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/african-media-review', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const importData = async () => {
  try {
    // Clear out any old country data first so we don't get duplicates
    await Country.deleteMany();

    // Insert all 54 countries
    await Country.insertMany(countriesData);

    console.log('✅ African Countries Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error with import: ${error.message}`);
    process.exit(1);
  }
};

// Run the function
importData();
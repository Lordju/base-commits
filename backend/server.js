const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Basic Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
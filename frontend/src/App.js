import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* The Navbar sits outside the Routes so it always shows up */}
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* We will build these pages in the next commits! */}
            {/* <Route path="/movies" element={<Movies />} /> */}
            {/* <Route path="/books" element={<Books />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Journal from './pages/Journal.jsx';
import Tracker from './pages/Tracker.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the Daily Journal page */}
        <Route path="/journal" element={<Journal />} />

        {/* Route for the Goal Tracking page */}
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </div>
  );
}

export default App;

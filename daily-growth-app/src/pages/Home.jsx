
// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import QuoteCard from '../components/QuoteCard.jsx';

export default function Home() {
  return (
    <div className="container page home">
      <h1 className="home__title">Daily Growth Tracker</h1>

      {/* Rotating quote component */}
      <QuoteCard />

      {/* Page actions */}
      <div className="home__actions">
        <Link to="/tracker" className="btn">Start Tracking</Link>
        <Link to="/journal" className="btn">Write in Journal</Link>
      </div>
    </div>
  );
}


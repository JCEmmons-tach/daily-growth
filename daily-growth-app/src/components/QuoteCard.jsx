import React, { useState, useEffect } from 'react';
// import your local quotes array
import quotes from '../quotes.json';

export default function QuoteCard() {
  const [current, setCurrent] = useState({ text: '', author: '' });

  useEffect(() => {
    // pick an initial random quote
    pickRandom();
    // then rotate every 5 seconds
    const id = setInterval(pickRandom, 5000);
    return () => clearInterval(id);
  }, []);

  function pickRandom() {
    const idx = Math.floor(Math.random() * quotes.length);
    const q = quotes[idx];
    setCurrent({ text: q.text, author: q.author || 'Unknown' });
  }

  // Render
  return (
    <div className="quote-card">
      <p className="quote-card__text">“{current.text}”</p>
      <p className="quote-card__author">— {current.author}</p>
    </div>
  );
}
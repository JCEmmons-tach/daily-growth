// src/components/QuoteCard.jsx
import React, { useState, useEffect } from 'react';

export default function QuoteCard() {
  const [current, setCurrent] = useState({ quote: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchQuote = async () => {
    setLoading(true);
    setError('');
    try {
      // 1) Call our proxy endpoint (no category or limit)
      const res = await fetch('/api/quotes', {
        headers: { 'X-Api-Key': import.meta.env.VITE_API_NINJA_KEY }
      });
      if (!res.ok) {
        throw new Error(`API error ${res.status}`);
      }

      // 2) The API returns an *array* of one quote object:
      //    [ { quote: "...", author: "...", category: "..." } ]
      const data = await res.json();
      // 3) Pull out the first element, and store its quote & author
      const { quote, author } = data[0];
      setCurrent({ quote, author });

    } catch (err) {
      console.error('Quote fetch error:', err);
      setError('Could not load quotes from API Ninja.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const id = setInterval(fetchQuote, 7000);
    return () => clearInterval(id);
  }, []);

  if (loading) return <p id='Load'>Loading quote…</p>;
  if (error)   return <p className="quote-card__error">{error}</p>;

  return (
    <div className="quote-card">
      <p className="quote-card__text">“{current.quote}”</p>
      <p className="quote-card__author">— {current.author}</p>
    </div>
  );
}









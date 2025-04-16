import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // TODO: replace with your chosen API endpoint
    fetch('https://zenquotes.io/api/today')
      .then(res => res.json())
      .then(([data]) => setQuote(data.q + ' — ' + data.a))
      .catch(console.error);
  }, []);

  return (
    <div className="page home">
      <h1 className="home__title">Daily Growth Tracker</h1>
      <div className="home__quote">
        {quote || 'Loading inspirational quote...'}
      </div>
      <div className="home__actions">
        <Link className="btn" to="/tracker">Start Tracking</Link>
        <Link className="btn" to="/journal">Write in Journal</Link>
      </div>
    </div>
  );
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page not-found">
      <h1>404 — Page Not Found</h1>
      <p>Sorry, we can’t find the page you’re looking for.</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
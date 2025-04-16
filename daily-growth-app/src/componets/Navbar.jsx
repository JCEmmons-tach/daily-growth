import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/journal">Daily Journal</Link>
      <Link style={styles.link} to="/tracker">Goal Tracker</Link>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '1rem'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold'
  }
};

export default Navbar;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Outlet />    {/* renders Home, Journal, or GoalTracker */}
      </main>
    </>
  );
}

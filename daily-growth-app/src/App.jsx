import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

 function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Outlet />    {/* renders Home, Journal, or GoalTracker */}
      </main>
    </>
  );
}
export default App;
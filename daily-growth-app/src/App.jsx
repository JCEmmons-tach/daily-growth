import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Tracker from './pages/Tracker.jsx';
import Journal from './pages/Journal.jsx';
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/journal">About</Link></li>
          <li><Link to="/tracker">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </Router>
  );
}

export default App;
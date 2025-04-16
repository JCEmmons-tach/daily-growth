import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Journal from './pages/Journal.jsx';
import Tracker from './pages/Tracker.jsx';
import NotFound from './pages/NotFound.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,            // Your layout component
    children: [
      { index: true, element: <Home /> },           // renders at "/"
      { path: 'journal', element: <Journal /> },    // renders at "/journal"
      { path: 'tracker', element: <Tracker /> },// renders at "/tracker"
      { path: '*', element: <NotFound /> },         // catch‑all 404
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
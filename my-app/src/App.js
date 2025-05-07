import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Account from './Account';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Search" element={<HomePage />} />
        <Route path="/Groups" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

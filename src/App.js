import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomeScreen from './Screens/HomeScreen/homescreen';
import Sector from './Screens/HomeScreen/sector/sector';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sector" element={<Sector />} />
      </Routes>
    </Router>
  );
}

export default App;

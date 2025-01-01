import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomeScreen from './Screens/HomeScreen/homescreen';
import Sector from './Screens/HomeScreen/sector/sector';
import StateScreen from './Screens/State/State/statescreen.js';
import Redirectparticularscheme from './Screens/HomeScreen/sector/redirectaprticularscheme';
import Aboutus from './Screens/about us/Aboutus.jsx';
import Statescheme from './Screens/State/State/statescheme/statescheme.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sector" element={<Sector />} />
        <Route path="/state" element={<StateScreen />} />
        <Route path='/state/particularstatescheme' element={<Statescheme />} />
        <Route path='/sector/scheme' element={<Redirectparticularscheme />} />
        <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>
    </Router>
  );
}

export default App;

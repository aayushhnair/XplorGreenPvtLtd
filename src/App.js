import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import SubcategoryPage from './Screens/ItemDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/ExploreGreenPvtLtd" element={<Home />} />
        <Route path="/ExploreGreenPvtLtd/details" element={<SubcategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

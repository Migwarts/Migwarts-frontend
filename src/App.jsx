import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDI from './screens/homeDI';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDI />} />
      </Routes>
    </Router>
  )
}

export default App

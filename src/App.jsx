import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDI from './screens/homeDI';
import Question from './screens/Question';
import Loading from './screens/Loading';
import react from "./styles/resetStyles.module.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDI />} />
        <Route path="/question" element={<Question />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  )
}

export default App

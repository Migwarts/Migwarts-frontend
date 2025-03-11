import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDI from './screens/homeDI';
import Question from './screens/Question';
import Loading from './screens/Loading';
import ResultDI from './screens/ResultDI';
import Chat from './screens/Chat';
import TestSelect from './screens/TestSelect';
import CharacterTest from './screens/CharacterTest';
import react from "./styles/resetStyles.module.css"
import { DRContext } from './context/DRContext';
import Login from './screens/login';

function App() {
  const [result, setResult] = useState(null);
  return (
    <DRContext.Provider value={{ result, setResult }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeDI />} />
          <Route path="/question" element={<Question />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/ResultDI" element={<ResultDI />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testSelect" element={<TestSelect />} />
          <Route path="/characterTest" element={<CharacterTest />} />
        </Routes>
      </Router>
    </DRContext.Provider>
  )
}

export default App

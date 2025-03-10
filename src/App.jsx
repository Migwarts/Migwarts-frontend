import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HomeDI from './screens/homeDI';
import Question from './screens/Question';
import Loading from './screens/Loading';
import ResultDI from './screens/ResultDI';
import Chat from './screens/Chat';
import react from "./styles/resetStyles.module.css";
import { DRContext } from './context/DRContext';

function App() {
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get('/api')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <DRContext.Provider value={{ result, setResult }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeDI />} />
          <Route path="/question" element={<Question />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/ResultDI" element={<ResultDI />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <div>
          <h1>{message || "Loading message..."}</h1>
        </div>
      </Router>
    </DRContext.Provider>
  );
}

export default App;
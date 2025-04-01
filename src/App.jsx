import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import HomeDI from "./screens/homeDI";
import Question from "./screens/Question";
import Loading from "./screens/Loading";
import ResultDI from "./screens/ResultDI";
import Chat from "./screens/Chat";
import LoadingCamera from "./screens/LoadingCamera";
import TestSelect from "./screens/TestSelect";
import CharacterTest from "./screens/CharacterTest";
import ResultCharacter from "./screens/ResultCharacter";
import Login from "./screens/login"
import { DRContext } from "./context/DRContext";
import react from "./styles/resetStyles.module.css";

function App() {
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <DRContext.Provider value={{ result, setResult }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/HomeDI" element={<HomeDI />} />
          <Route path="/question" element={<Question />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/ResultDI" element={<ResultDI />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/testSelect" element={<TestSelect />} />
          <Route path="/characterTest" element={<CharacterTest />} />
          <Route path="/LoadingCamera" element={<LoadingCamera />} />
          <Route path="/ResultCharacter" element={<ResultCharacter />} />

        </Routes>
        <div>{/* <h1>{message || "Loading message..."}</h1> */}</div>
      </Router>
    </DRContext.Provider>
  );
}

export default App;

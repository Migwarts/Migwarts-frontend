import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/Question.module.css";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../context/ResultContext";

import BackgroundImg from "../assets/images/characterTestBackgroundImg.png";
import ProgressBar from "../components/ProgressBar";
import CharacterQuestionCard from "../components/CharacterQuestionCard";

export default function CharacterTest() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { characterArr, setCharacterArr, setCharacterResult } =
    useContext(ResultContext);

  useEffect(() => {
    fetch("/public/data/questionDataChr.json")
      .then((response) => response.json())
      .then((data) => {
        const randomQuestions = getRandomQ(data, 10);
        setQuestions(randomQuestions);
      })
      .catch((error) => console.error("에러 확인:", error));
  }, []);

  const getRandomQ = (data, count) => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const handleAnswerSelect = (answer) => {
    if (currentIndex >= 9) {
      let maxType = 0;
      let maxIndex = 0;
      for (let i = 0; i < characterArr.length; i++) {
        if (maxType < characterArr[i]) {
          maxIndex = i;
          maxType = characterArr[i];
        }
      }
      setCharacterResult(maxIndex);
      setCharacterArr(Array(12).fill(0));
      navigate("/LoadingCamera", { state: { from: "character" } });
    } else {
      setCurrentIndex((pre) => pre + 1);
      if (answer === true) {
        for (
          let i = 0;
          i < questions[currentIndex]["answer"]["increment"].length;
          i++
        ) {
          characterArr[questions[currentIndex]["answer"]["increment"][i]]++;
        }
        setCharacterArr([...characterArr]);
      }
    }
  };
  // useEffect(() => {
  //     console.log(characterArr);
  // }, [characterArr])

  return (
    <div>
      <img src={BackgroundImg} className={styles.BackImg}></img>
      <ProgressBar current={currentIndex} total={10} backColor={"#556889"} />
      {questions.length > 0 ? (
        <CharacterQuestionCard
          question={questions[currentIndex]}
          onAnswer={handleAnswerSelect}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

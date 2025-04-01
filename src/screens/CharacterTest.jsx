import React, { useState, useEffect, useContext } from "react";
import styles from "../styles/Question.module.css";
import { useNavigate } from "react-router-dom"
import { CharacterContext } from "../context/CharacterContext";

import BackgroundImg from "../assets/images/characterTestBackgroundImg.png";
import ProgressBar from "../components/ProgressBar";
import CharacterQuestionCard from "../components/CharacterQuestionCard";

export default function CharacterTest() {
    const navigate = useNavigate()
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const { charResult, setCharResult } = useContext(CharacterContext);

    useEffect(() => {
        fetch('/public/data/questionDataChr.json')
            .then((response) => response.json())
            .then((data) => {
                const randomQuestions = getRandomQ(data, 11)
                setQuestions(randomQuestions)
            })
            .catch((error) => console.error("에러 확인:", error));
    }, []);

    const getRandomQ = (data, count) => {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    const handleAnswerSelect = (answer) => {
        if(currentIndex >= 10){
            let maxType = 0;
            let maxIndex = 0;
            for (let i = 0; i < charResult.length; i++) {
                if (maxType < charResult[i]) {
                    maxIndex = i;
                    maxType = charResult[i];
                }
            }
            setCharResult(maxIndex);
            navigate("/ResultCharacter");
        } else {
            setCurrentIndex((pre) => pre+1);
            if(answer === true){
                for(let i=0; i<questions[currentIndex]['answer']['increment'].length; i++){
                    charResult[questions[currentIndex]['answer']['increment'][i]]++;
                }
                setCharResult([...charResult]);
            }
        }
    }    

    return (
        <div>
            <img src={BackgroundImg} className={styles.BackImg}></img>
            <ProgressBar current={currentIndex} total={10} backColor={"#556889"} />
            {questions.length > 0 
            ? (
                <CharacterQuestionCard 
                    question={questions[currentIndex]}
                    onAnswer={handleAnswerSelect}
                />
            ) : (<></>)
            }
        </div>
    )
}
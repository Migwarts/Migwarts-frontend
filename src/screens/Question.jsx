import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/Question.module.css"
import { DRContext } from "../context/DRContext"

import QuestionBackGround from "../assets/images/questionBackgroundImg.png"
import ProgressBar from "../components/ProgressBar"
import QuestionCard from "../components/questionCard"

export default function Question() {
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(1)
    const { result, setResult } = useContext(DRContext);

    const navigate = useNavigate()

    useEffect(() => {
        fetch('/public/data/questionData.json')
            .then((response) => response.json())
            .then((data) => {
                const randomQuestions = getRandomQ(data, 11)
                setQuestions(randomQuestions)
            })
            .catch((error) => console.error("에러 확인:", error));
    }, [])

    const getRandomQ = (data, count) => {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count)
    }

    const handleAnswerSelect = (answer) => {
        if (currentIndex >= 10) {
            let maxType = 0;
            let typeIndex = 0;
            for (let i = 0; i < result.length; i++) {
                if (maxType < result[i]) {
                    typeIndex = i;
                    maxType = result[i];
                }
            }
            setResult(typeIndex);
            navigate("/Loading");
        } else {
            setCurrentIndex((prev) => prev + 1);
            result[answer.type]++;
            setResult([...result]);
        }
    }

    return (
        <div>
            <img src={QuestionBackGround} className={styles.BackImg}></img>
            <ProgressBar current={currentIndex} total={10} backColor={"#895555"} />

            {questions.length > 0 ? (
                <QuestionCard
                    question={questions[currentIndex]}
                    onAnswer={handleAnswerSelect}
                />
            ) : (<div></div>)
            }
        </div>
    )
}
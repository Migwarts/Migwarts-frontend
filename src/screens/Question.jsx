import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/Question.module.css"

import QuestionBackGround from "../assets/images/questionBackgroundImg.png"
import ProgressBar from "../components/ProgressBar"
import QuestionCard from "../components/questionCard"

export default function Question() {
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(1)
    const [selectedAnswers, setSelectedAnswers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch('/public/data/questionData.json')
            .then((response) => response.json())
            .then((data) => {
                const randomQuestions = getRandomQ(data, 11)
                setQuestions(randomQuestions)
            })
            .catch((error) => console.error("에러 확읺:", error));
    }, [])

    const getRandomQ = (data, count) => {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count)
    }

    const handleAnswerSelect = (answer) => {
        setSelectedAnswers((prev) => [...prev, answer])

        if (currentIndex >= 10) {
            navigate("/loading")
        } else {
            setCurrentIndex((prev) => prev + 1)
        }
    }

    return (
        <div>
            <img src={QuestionBackGround} className={styles.BackImg}></img>
            <ProgressBar current={currentIndex} total={10} />

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
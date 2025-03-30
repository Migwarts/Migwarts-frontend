import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/questionCard";
import styles from "../styles/Question.module.css"
import styles2 from "../styles/CharacterTest.module.css"

import BackgroundImg from "../assets/images/characterTestBackgroundImg.png"
import ProgressBar from "../components/ProgressBar";

export default function CharacterTest() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [questions, setQuestions] = useState([])
    const answers = ["예", "아니요"]

    useEffect(() => {
        fetch('data/questionDataChr.json')
            .then((response) => response.json())
            .then((data) => {
                const randomQuestions = getRandomQ(data, 11)
                setQuestions(randomQuestions)
            })
            .catch((err) => { console.error(error) })
    }, [])

    const getRandomQ = (data, count) => {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count)
    }
    const handleAnswerClick = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    //현재 질문
    const currentQuestion = questions[currentIndex]

    return (
        <div>
            <img src={BackgroundImg} className={styles.BackImg}></img>
            <ProgressBar current={currentIndex} total={10} backColor={"#556889"} />

            {currentQuestion && (
                <div>
                    <p className={styles2.title}>{currentQuestion.question}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2.78vh" }}>
                        {answers.map((answer) => (
                            <button className={styles2.selectBtn}
                                onClick={() => handleAnswerClick(answer)}
                            >{answer}</button>
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}
import React from "react";
import styles from "../styles/QuestionCard.module.css"

export default function QuestionCard({ question, onAnswer }) {
    const handleAnswerClick = (answer) => { onAnswer(answer) }
    return (
        <div className={styles.allContainer}>
            <p className={styles.title}>{question.question}</p>
            <div className={styles.answerContainer}>
                {question.answers.map((answer, index) => (
                    <button key={index}
                        className={styles.questionBtn}
                        datatype={answer.type}
                        onClick={() => handleAnswerClick(answer)}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
        </div>
    )
}
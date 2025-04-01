import React, { useContext } from 'react';
import styles from "../styles/CharacterTest.module.css";

export default function CharacterQuestionCard({ question, onAnswer }) {
    const handleAnswerClick = (answer) => { onAnswer(answer) }
    return (
        <div>
            <p className={styles.title}>{question.question}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2.78vh" }}>
                <button className={styles.selectBtn} onClick={() => handleAnswerClick(true)}>네</button>
                <button className={styles.selectBtn} onClick={() => handleAnswerClick(false)}>아니요</button>
            </div>
        </div>
    )
}
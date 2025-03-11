import { useState } from "react";
import styles from "../styles/Question.module.css"

import BackgroundImg from "../assets/images/characterTestBackgroundImg.png"
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/questionCard";

export default function CharacterTest() {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div>
            <img src={BackgroundImg} className={styles.BackImg}></img>
            <ProgressBar current={currentIndex} total={10} backColor={"#556889"} />


        </div>
    )
}
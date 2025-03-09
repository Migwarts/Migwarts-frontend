import { useNavigate } from "react-router-dom"
import styles from "../styles/TestSelect.module.css"
import BackGroundImg from "../assets/images/TestSelectBackGroundImg.png"
import Line from "../assets/images/Line.png"
import SelectMent from "../assets/images/SelectMent.png"
import { use } from "react"

export default function TestSelect() {
    const navigate = useNavigate();
    const dormitoryTestClick = () => {
        navigate('#')
    }
    const characterTestClick = () => {
        navigate('/question')
    }

    return (
        <div className={styles.allContainer}>
            <img src={BackGroundImg} className={styles.backgroundImg}></img>
            <div className={styles.mentContainer}>
                <img src={SelectMent} className={styles.selectMentImg}></img>
                <div className={styles.selectOptionContainer}>
                    <div>
                        <p className={styles.select} onClick={dormitoryTestClick}>기숙사 테스트</p>
                        <img src={Line} className={styles.lineImg}></img>
                    </div>

                    <div>
                        <p className={styles.select} onClick={characterTestClick}>나와 닮은 캐릭터 찾기</p>
                        <img src={Line} className={styles.lineImg}></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
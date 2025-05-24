import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/ResultDIStyles.module.css';
import { ResultContext } from '../context/ResultContext';

import DigImage from '../assets/images/DIG.png';
import DihImage from '../assets/images/DIH.png';
import DirImage from '../assets/images/DIR.png';
import DisImage from '../assets/images/DIS.png';
import goChatG from '../assets/images/goChatG.png';
import goChatH from '../assets/images/goChatH.png';
import goChatR from '../assets/images/goChatR.png';
import goChatS from '../assets/images/goChatS.png';
import goHomeG from '../assets/images/goHomeG.png';
import goHomeH from '../assets/images/goHomeH.png';
import goHomeR from '../assets/images/goHomeR.png';
import goHomeS from '../assets/images/goHomeS.png';

function ResultDI() {
    const { dormitoryResult } = useContext(ResultContext);
    const [goChatUrl, setGoChatUrl] = useState(null);
    const [goHomeUrl, setGoHomeUrl] = useState(null);
    const [backgroundUrl, setBackgroundUrl] = useState(null);
    useEffect(() => {
        if (dormitoryResult == 0) {
            setGoChatUrl(goChatG);
            setGoHomeUrl(goHomeG);
            setBackgroundUrl(DigImage);
        }
        else if (dormitoryResult == 1) {
            setGoChatUrl(goChatH);
            setGoHomeUrl(goHomeH);
            setBackgroundUrl(DihImage);
        }
        else if (dormitoryResult == 2) {
            setGoChatUrl(goChatR);
            setGoHomeUrl(goHomeR);
            setBackgroundUrl(DirImage);
        }
        else if (dormitoryResult == 3) {
            setGoChatUrl(goChatS);
            setGoHomeUrl(goHomeS);
            setBackgroundUrl(DisImage);
        }
    }, []);
    return (
        <div className={styles.body}>
            <img src={backgroundUrl} className={styles.backgroundImg} />
            <Link to="/"><img src={goHomeUrl} className={styles.goHomeImg} /></Link>
            <Link to="/chat">
                <img src={goChatUrl} className={styles.goChatImg} />
            </Link>
        </div>
    )
}

export default ResultDI;
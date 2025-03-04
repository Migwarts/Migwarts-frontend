import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/HomeDIStyles.module.css';

import DigImage from '../assets/images/DIG.png';
import DihImage from '../assets/images/DIH.png';
import DirImage from '../assets/images/DIR.png';
import DisImage from '../assets/images/DIS.png';
import GryffindorMark from '../assets/images/GryffindorMark.png';
import HufflepufMark from '../assets/images/HufflepufMark.png';
import RauenclawMark from '../assets/images/RauenclawMark.png';
import SlytherinMark from '../assets/images/SlytherinMark.png';
import goHomeG from '../assets/images/goHomeG.png';
import goHomeH from '../assets/images/goHomeH.png';
import goHomeR from '../assets/images/goHomeR.png';
import goHomeS from '../assets/images/goHomeS.png';

function HomeDI(){
    const location = useLocation();
    const dormitory = location.state?.dormitory;

    const [backgroundImgSrc, setBackgroundImgSrc] = useState(0);
    const [currentImage, setCurrentImage] = useState();
    const [currentHome, setCurrentHome] = useState();
    const markClick = (i) => {
        setBackgroundImgSrc(i);
        switch(i){
            case 0: 
                setCurrentImage(DigImage);
                setCurrentHome(goHomeG);
                break;
            case 1: 
                setCurrentImage(DirImage);
                setCurrentHome(goHomeR);
                break;
            case 2: 
                setCurrentImage(DihImage);
                setCurrentHome(goHomeH);
                break;
            case 3: 
                setCurrentImage(DisImage);
                setCurrentHome(goHomeS);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        markClick(dormitory);
    }, [dormitory]);
    
    return (
        <div className={styles.body}>
            <img src={currentImage} className={styles.backgroundImg} />
            <Link >
                <img src={currentHome} className={styles.homeButton}/>
            </Link>
            <div className={styles.markContainer}>
                <div className={styles.markItem}>
                    <div className={styles.dot} style={{backgroundColor: backgroundImgSrc===0? '#660000': '#BABABA'}}/>
                    <img src={GryffindorMark} className={styles.GMark} onClick={()=>{markClick(0)}}/>
                </div>
                <div className={styles.markItem}>
                    <div className={styles.dot} style={{backgroundColor: backgroundImgSrc===1? '#1A3956': '#BABABA'}}/>
                    <img src={RauenclawMark} className={styles.HMark} onClick={()=>{markClick(1)}}/>
                </div>
                <div className={styles.markItem}>
                    <div className={styles.dot} style={{backgroundColor: backgroundImgSrc===2? '#FF9D0B': '#BABABA'}}/>
                    <img src={HufflepufMark} className={styles.RMark} onClick={()=>{markClick(2)}}/>
                </div>
                <div className={styles.markItem}>
                    <div className={styles.dot} style={{backgroundColor: backgroundImgSrc===3? '#2F751C': '#BABABA'}}/>
                    <img src={SlytherinMark} className={styles.SMark} onClick={()=>{markClick(3)}}/>
                </div>
            </div>
        </div>
    );
}

export default HomeDI;
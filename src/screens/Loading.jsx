import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Loading.module.css';

import LoadingHat from '../assets/images/LodingHat.png';
import LoadingBackGround from "../assets/images/questionBackgroundImg.png";

export default function Loading() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/ResultDI');
        }, 1000);
    }, []);
    return (
        <div>
            <img src={LoadingBackGround} className={styles.LoadingBackImg} />
            <div className={styles.AllLoading}>
                <p className={styles.LoadingP}>당신의 기숙사는 . . .</p>
                <img src={LoadingHat} className={styles.LoadingImage} />
            </div>
        </div>
    );
}
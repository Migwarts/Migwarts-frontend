import React, { useState } from 'react'
import styles from '../styles/Loading.module.css';

import LoadingHat from '../assets/images/LodingHat.png';
import LoadingBackGround from "../assets/images/questionBackgroundImg.png";

export default function Loading() {
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
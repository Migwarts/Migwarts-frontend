import React, { useEffect, useState } from 'react';
import styles from '../styles/Login.module.css';

import LoginBackGround from "../assets/images/questionBackgroundImg.png";
import Gryffindor from "../assets/images/gryffindor.png";
import Ravenclaw from "../assets/images/ravenclaw.png";
import Hufflepuf from "../assets/images/hufflepuf.png";
import Slytherin from "../assets/images/slytherin.png";
import MigwartsLogo from "../assets/images/migwartslogo.png";

export default function Login() {
    return (
        <div className={styles.AllDorm}>
            <img src={LoginBackGround} className={styles.LoginBackImg} />
            <div className={styles.DormImg}>
                <div className={styles.GryRav}>
                    <img src={Gryffindor} className={styles.GryffindorImg}/>
                    <img src={Ravenclaw} className={styles.RavenclawImg}/>
                </div>
                <img src={MigwartsLogo} className={styles.MigwartsLogo} />
                <div className={styles.HufSly}>
                    <img src={Hufflepuf} className={styles.HufflepufImg}/>
                    <img src={Slytherin} className={styles.SlytherinImg}/>
                </div>
            </div>
        </div>
    );
}
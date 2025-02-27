import React, { useEffect, useState, useNavigate } from 'react';
import styles from '../styles/Login.module.css';

import LoginBackGround from "../assets/images/questionBackgroundImg.png";
import Gryffindor from "../assets/images/gryffindor.png";
import Ravenclaw from "../assets/images/ravenclaw.png";
import Hufflepuf from "../assets/images/hufflepuf.png";
import Slytherin from "../assets/images/slytherin.png";
import MigwartsLogo from "../assets/images/migwartslogo.png";
import { Link } from 'react-router-dom';

export default function Login() {
    const [studentId, setStudentId] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!studentId || !name) {
            setError('학번, 이름을 입력해주세요');
            return;
        }
        setError('');
    };

    return (
        <div>
            <div className={styles.AllDorm}>
                <img src={LoginBackGround} className={styles.LoginBackImg} />
                <div className={styles.DormImg}>
                    <div className={styles.GryRav}>
                        <Link to="/HomeDI">
                            <img src={Gryffindor} className={styles.GryffindorImg}/>
                        </Link>
                        <Link to="/HomeDI">
                            <img src={Ravenclaw} className={styles.RavenclawImg}/>
                        </Link>
                    </div>
                    <img src={MigwartsLogo} className={styles.MigwartsLogo} />
                    <div className={styles.HufSly}>
                        <Link to="/HomeDI">
                            <img src={Hufflepuf} className={styles.HufflepufImg}/>
                        </Link>
                        <Link to="/HomeDI">
                            <img src={Slytherin} className={styles.SlytherinImg}/>
                        </Link>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="116" viewBox="0 0 59 116" fill="none" className={styles.PickArrow}>
                <path d="M2.44551 33L3.18365 32.8671L2.44551 33ZM41 58L40.2523 57.9404L41 58ZM58.4935 110.512C58.7763 110.209 58.7602 109.735 58.4576 109.452L53.5256 104.843C53.223 104.561 52.7484 104.577 52.4656 104.879C52.1828 105.182 52.1989 105.657 52.5015 105.939L56.8855 110.036L52.789 114.42C52.5062 114.723 52.5223 115.197 52.8249 115.48C53.1276 115.763 53.6022 115.747 53.885 115.444L58.4935 110.512ZM12.0565 0.895196C1.73332 8.46549 -0.479419 20.9842 1.70737 33.1329L3.18365 32.8671C1.05039 21.0158 3.26663 9.20118 12.9435 2.1048L12.0565 0.895196ZM1.70737 33.1329C4.01048 45.9278 13.6111 55.3442 22.7074 60.0414C27.2525 62.3884 31.7558 63.6021 35.244 63.4209C36.9914 63.3301 38.545 62.8854 39.7098 61.9915C40.8967 61.0807 41.6125 59.7541 41.7476 58.0596L40.2523 57.9404C40.1483 59.2459 39.6205 60.1693 38.7967 60.8015C37.9508 61.4506 36.7265 61.8418 35.1662 61.9229C32.0389 62.0854 27.8071 60.9866 23.3957 58.7086C14.5789 54.1558 5.38058 45.0722 3.18365 32.8671L1.70737 33.1329ZM41.7476 58.0596C42.0529 54.23 40.1591 51.3792 37.2036 49.6781C34.2824 47.9968 30.3272 47.4273 26.3455 48.0078C18.3635 49.1717 9.97655 55.0192 9.19725 66.449L10.6938 66.551C11.4145 55.9808 19.1128 50.5783 26.562 49.4922C30.2959 48.9477 33.8928 49.5032 36.4553 50.9781C38.9835 52.4333 40.5051 54.77 40.2523 57.9404L41.7476 58.0596ZM9.19725 66.449C7.66381 88.9393 28.0752 111.763 57.9709 110.75L57.9201 109.25C28.8158 110.237 9.22721 88.0607 10.6938 66.551L9.19725 66.449Z" fill="white" fill-opacity="0.7"/>
            </svg>
            <p className={styles.ChooseDorm}>클릭하여 각 기숙사 정보를
            <br></br>확인해보세요!</p>
            <form className={styles.TextContainer} onSubmit={handleSubmit}>
                <div className={styles.NumText}>
                    <label className={styles.NumCon}>학번</label>
                    <input type="text" className={styles.NumBox} value={studentId} onChange={(e) => setStudentId(e.target.value)}/>
                </div>
                <div className={styles.NameText}>
                    <label className={styles.NameCon}>이름</label>
                    <input type="text" className={styles.NameBox} value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                {error && <div className={styles.ErrorMessage}>{error}</div>}
                <button className={styles.BtnSrt}>
                    START
                </button>
            </form>
        </div>
    );
}
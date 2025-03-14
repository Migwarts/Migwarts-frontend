import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoadingCamera.module.css";

import LoadingCameraHat from "../assets/images/LodingHat.png";
import LoadingCameraBackGround from "../assets/images/questionBackgroundImg.png";

export default function LoadingCamera() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/ResultDI");
    }, 5000);
  }, []);

  const txt = "당신의 기숙사는 . . .";
  const [text, setText] = useState("");
  const [count, setcount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]);
      setcount(count + 1);
    }, 300);
    if (count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div>
      <img src={LoadingBackGround} className={styles.LoadingBackImg} />
      <div className={styles.AllLoading}>
        <p className={styles.LoadingP}>{text}</p>
        <img src={LoadingHat} className={styles.LoadingImage} />
      </div>
    </div>
  );
}

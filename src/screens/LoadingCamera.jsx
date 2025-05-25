import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoadingCamera.module.css";

import LoadingCameraBackGround from "../assets/images/LoadingCamera.png";
import LoadingCameraHat from "../assets/images/LoadingCameraHat.png";

export default function LoadingCamera() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const [time, setTime] = useState(5);
  const location = useLocation();
  const fromPage = location.state?.from;

  // 카메라 접근
  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { ideal: 462 },
          height: { ideal: 525 },
          aspectRatio: 462 / 525,
        },
      })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play().catch((err) => {
          console.warn("play() 실패:", err);
        });
      })
      .catch((error) => {
        console.log("카메라 접근 에러:", error);
      });
  };

  useEffect(() => {
    getUserCamera();
  }, []);

  // 타이머 동작 (setInterval로 수정)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 정리
  }, []);

  // 타이머 종료 후 페이지 이동
  useEffect(() => {
    if (time === 0) {
      if (fromPage === "question") {
        navigate("/ResultDI");
      } else if (fromPage === "character") {
        navigate("/ResultCharacter");
      } else {
        navigate("/"); // fallback
      }
    }
  }, [time, navigate, fromPage]);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <img
        src={LoadingCameraBackGround}
        className={styles.LoadingCameraBackImg}
        alt="배경"
      />
      <div className={styles.AllLoadingCamera}>
        <img
          src={LoadingCameraHat}
          className={styles.LoadingCameraHat}
          alt="모자"
        />
        <div className={styles.VideoContainer}>
          <video ref={videoRef} muted autoPlay playsInline />
        </div>
      </div>
      <div className={styles.AllCountDown}>
        {time > 0 && <div className={styles.CountDown}>{time}</div>}
      </div>
    </div>
  );
}

import React from "react";
import styles from "../styles/ProgressBar.module.css";

export default function ProgressBar({ current, total, backColor }) {
    return (
        <div className={styles.allContainer}>
            <div
                style={{ background: backColor }}
                className={styles["progress-container"]}>
                <div
                    className={styles["progress-bar"]}
                    style={{ width: `${(current / total) * 100}%` }}
                ></div>
            </div>
            <p className={styles.progressText}>
                {current + 1}/{total}
            </p>
        </div>
    );
}

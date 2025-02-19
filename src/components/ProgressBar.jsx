import React from "react";
import styles from "../styles/ProgressBar.module.css";

export default function ProgressBar({ current, total }) {
    return (
        <div className={styles.allContainer}>
            <div className={styles["progress-container"]}>
                <div
                    className={styles["progress-bar"]}
                    style={{ width: `${(current / total) * 100}%` }}
                ></div>
            </div>
            <p className={styles.progressText}>
                {current}/{total}
            </p>
        </div>
    );
}

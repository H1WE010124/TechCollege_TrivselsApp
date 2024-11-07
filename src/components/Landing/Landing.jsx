import React, { useState, useEffect } from 'react';
import styles from './Landing.module.scss';

export function Landing() {
    const [time, setTime] = useState("00:00");
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                const currentTime = new Date();
                const hours = String(currentTime.getHours()).padStart(2, '0');
                const minutes = String(currentTime.getMinutes()).padStart(2, '0');
                setTime(`${hours}.${minutes}`);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);

    return (
        <div className={styles.container}>
          <div className={styles.AdminText}>
            <h2>Admin</h2>
            </div>
            <div className={styles.clock}>{time}</div>
            <button onClick={handleStart} className={styles.button}>
                Start &gt;
            </button>
        </div>
    );
}

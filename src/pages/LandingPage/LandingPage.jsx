import { Clock } from "../../components/Clock/Clock";
import styles from "./Landing.module.scss";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { AppButton } from "../../components/AppButton/AppButton";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

export function LandingPage() {
  const [showStartButton, setShowStartButton] = useState(false);
  const [countdownText, setCountdownText] = useState("");

 // tjek om klok er mellem 12:00 and 14:00
  const checkTimeRange = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const isAfterStart = hours > 12 || (hours === 12 && minutes >= 0);
    const isBeforeEnd = hours < 14 || (hours === 13 && minutes <= 59);

    return isAfterStart && isBeforeEnd;
  };

  // regner ud om hvor lang tid er der til/fra kl. 12:00
  const calculateCountdown = () => {
    const now = new Date();
    let targetTime = new Date();
    targetTime.setHours(12, 0, 0, 0); // Set target time to 12:00

    if (now >= targetTime) {
      targetTime.setDate(targetTime.getDate() + 1); // sæt target til imorgen når kl 12 er forbi
    }

    const timeDifference = targetTime - now;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    setCountdownText(`Meningsmåling åbner om ${hours} timer og ${minutes} minutter`);
  };

  useEffect(() => {
    const updateButtonVisibility = () => {
      setShowStartButton(checkTimeRange());
      calculateCountdown();
    };
    updateButtonVisibility();

    const intervalId = setInterval(updateButtonVisibility, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Box className={styles.Admin}>
        <NavLink to="/login">
          <AppButton buttonText={"Admin"}></AppButton>
        </NavLink>
      </Box>

      <Box className={styles.ClockAndStart}>
        <Box
          sx={{
            color: "#2E7D32",
            fontSize: "2rem",
            marginBottom: "16px",
          }}
        >
          <Clock />
        </Box>
        
        {!showStartButton && (
          <Box className={styles.CountdownText}>
            {countdownText}
          </Box>
        )}

        {showStartButton && (
          <NavLink to={"/start"}>
            <AppButton buttonText={"Start"}></AppButton>
          </NavLink>
        )}
      </Box>
    </>
  );
}

import { Clock } from "../../components/Clock/Clock";
import styles from "./Landing.module.scss";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { AppButton } from "../../components/AppButton/AppButton";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

export function LandingPage() {
  const [showStartButton, setShowStartButton] = useState(false);

  // tjek om klok er mellem 12:00 and 14:00
  const checkTimeRange = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    //12:00 - 12:59
    const isAfterStart = hours > 12 || (hours === 12 && minutes >= 0);
    //13:00 - 13:59
    const isBeforeEnd = hours < 14 || (hours === 13 && minutes <= 59);

    return isAfterStart && isBeforeEnd;
  };

  useEffect(() => {
    const updateButtonVisibility = () => setShowStartButton(checkTimeRange());
    updateButtonVisibility();

    const intervalId = setInterval(updateButtonVisibility, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Box className={styles.Admin}>
        <NavLink to="/admin">
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
        {showStartButton && (
          <NavLink to={"/start"}>
            <AppButton buttonText={"Start"}></AppButton>
          </NavLink>
        )}
      </Box>
    </>
  );
}

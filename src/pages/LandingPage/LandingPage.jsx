import { Clock } from "../../components/Clock/Clock";
import styles from "./Landing.module.scss";
import { NavLink } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { AppButton } from "../../components/AppButton/AppButton";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import {LocationCheck} from '/src/helpers/LocationCheck.jsx';


export function LandingPage() {
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
        <NavLink to={"/start"}>
          <AppButton buttonText={"Start"}></AppButton>
        </NavLink>
        <Box mt={2}>
        <LocationCheck />
        </Box>
      </Box>
    </>
  );
}

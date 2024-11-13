import { Clock } from "../../components/Clock/Clock";
import styles from "./Landing.module.scss";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { AppButton } from "../../components/AppButton/AppButton";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import {LocationCheck} from '/src/helpers/LocationCheck.jsx';
import Typography from '@mui/material/Typography';

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
          <LocationCheck >
          <Typography variant="p">
            <LocationCheck />
          </Typography>
          </LocationCheck>
        
      </Box>
    </>
  );
}

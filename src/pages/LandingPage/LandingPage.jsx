import { Clock } from "../../components/Clock/Clock";
import styles from "./Landing.module.scss";
import { NavLink } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { AppButton } from "../../components/AppButton/AppButton";
import { useState } from "react";
import { LocationCheck } from "/src/helpers/LocationCheck.jsx";

export function LandingPage() {
  const [locationOk, setLocationOk] = useState(null); // null = checking, true = location OK, false = location not OK

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
        {locationOk === true && (
          <NavLink to={"/start"}>
            <AppButton buttonText={"Start"}></AppButton>
          </NavLink>
        )}
        {locationOk === false && (
          <Typography
            sx={{
              color: "black",
              fontSize: "24px",
              marginTop: "10px",
            }}
          >
            Du skal være på skolen for at tilgå meningsmålingen
          </Typography>
        )}
        <Box mt={2}>
          <LocationCheck onLocationCheck={setLocationOk} />
        </Box>
      </Box>
    </>
  );
}

import { useState } from "react";
import styles from "./SubmissionStatusPage.module.scss";
import { Typography, Box, Button, Container } from "@mui/material";

export const SubmissionStatusPage = ({ status }) => {
  //const [status, setStatus] = useState(null);

  // Funktion til at simulere formularindsendelse
  /*   const handleSubmit = async () => {
    try {
      // Tilfældigt respons for at simulere både succes og fejl
      const response = { ok: Math.random() > 0.5 };

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
 */
  // Funktion til at prøve indsendelse igen efter en fejl
  /*   const handleRetry = () => {
    console.log("Retrying submission...");
    setStatus(null);
    handleSubmit();
  }; */

  return (
    <Container className={styles.statusPage}>
      {/* Viser succesbesked hvis status er "success" */}
      {status === "success" && (
        <Box
          variant="section"
          className={`${styles.message} ${styles.successMessage}`}
        >
          <Typography variant="h1">Tak for din deltagelse!</Typography>
          <Typography>Din indsendelse er blevet modtaget.</Typography>
          <Button
            className={`${styles.button} ${styles.returnButton}`}
            onClick={() => (window.location.href = "/")}
          >
            Tilbage til forsiden
          </Button>
        </Box>
      )}

      {/* Viser fejlbesked hvis status er "error" */}
      {status === "error" && (
        <Box
          variant="section"
          className={`${styles.message} ${styles.errorMessage}`}
        >
          <Typography variant="h1">Ups! Noget gik galt</Typography>
          <Typography>
            Vi kunne desværre ikke modtage din indsendelse. Prøv venligst igen.
          </Typography>
          <Button
            className={`${styles.button} ${styles.retryButton}`}
            onClick={handleRetry}
          >
            Prøv igen
          </Button>
        </Box>
      )}
    </Container>
  );
};

import React, { useState } from "react";
import styles from "./SubmissionStatusPage.module.scss"; // Import af CSS-modul

export const SubmissionStatusPage = () => {
  const [status, setStatus] = useState(null); // null, "success" eller "error"

  // Funktion til at simulere formularindsendelse
  const handleSubmit = async () => {
    console.log("Submitting form..."); // Log indsendelse
    try {
      // Simuler en serverrespons (brug fetch i virkeligheden)
      const response = { ok: true }; // Skift til false for at teste fejlbeskeden

      if (response.ok) {
        setStatus("success");
        console.log("Submission successful"); // Log success
      } else {
        setStatus("error");
        console.log("Submission failed"); // Log fejl
      }
    } catch (error) {
      setStatus("error");
      console.log("An error occurred during submission"); // Log fejl i catch
    }
  };

  const handleRetry = () => {
    console.log("Retrying submission..."); // Log retry
    setStatus(null); // Nulstil status og prøv igen
    handleSubmit();  // Forsøg igen
  };

  return (
    <main className={styles.statusPage}>
      {status === "success" && (
        <section className={`${styles.message} ${styles.successMessage}`}>
          <h1>Tak for din deltagelse!</h1>
          <p>Din indsendelse er blevet modtaget.</p>
          <button className={`${styles.button} ${styles.returnButton}`} onClick={() => (window.location.href = "/")}>
            Tilbage til forsiden
          </button>
        </section>
      )}
      {status === "error" && (
        <section className={`${styles.message} ${styles.errorMessage}`}>
          <h1>Ups! Noget gik galt</h1>
          <p>Vi kunne desværre ikke modtage din indsendelse. Prøv venligst igen.</p>
          <button className={`${styles.button} ${styles.retryButton}`} onClick={handleRetry}>
            Prøv igen
          </button>
        </section>
      )}
    </main>
  );
};



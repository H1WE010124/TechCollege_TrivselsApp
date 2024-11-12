import { useState } from "react";
import styles from "./SubmissionStatusPage.module.scss";

export const SubmissionStatusPage = () => {
  const [status, setStatus] = useState(null);

  // Funktion til at simulere formularindsendelse
  const handleSubmit = async () => {
    try {
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

  // Funktion til at prøve indsendelse igen efter en fejl
  const handleRetry = () => {
    setStatus(null);
    handleSubmit();
  };

  return (
    <main className={styles.statusPage}>
      {/* Viser succesbesked hvis status er "success" */}
      {status === "success" && (
        <section className={`${styles.message} ${styles.successMessage}`}>
          <h1>Tak for din deltagelse!</h1>
          <p>Din indsendelse er blevet modtaget.</p>
          <button className={`${styles.button} ${styles.returnButton}`} onClick={() => (window.location.href = "/")}>
            Tilbage til forsiden
          </button>
        </section>
      )}

      {/* Viser fejlbesked hvis status er "error" */}
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

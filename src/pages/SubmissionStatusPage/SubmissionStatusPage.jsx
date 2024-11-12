import { useState, useEffect } from "react";
import styles from "./SubmissionStatusPage.module.scss";

export const SubmissionStatusPage = () => {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect til at hente data ved komponentens opstart
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch();

        if (response.ok) {
          const result = await response.json();
          setData(result); // Gem de hentede data
        } else {
          setError("Kunne ikke hente data");
        }
      } catch (error) {
        setError("Der opstod en fejl ved datahentning.");
      }
    };

    fetchData();
  }, []); // Kører kun én gang ved komponentens opstart

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
      {/* Viser de hentede data, hvis de er tilgængelige */}
      {data && (
        <section className={styles.dataSection}>
          <h2>Hentede data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </section>
      )}

      {/* Viser succesbesked hvis status er "success" */}
      {status === "success" && (
        <section className={`${styles.message} ${styles.successMessage}`}>
          <h1>Tak for din deltagelse!</h1>
          <p>Din indsendelse er blevet modtaget.</p>
          <button
            className={`${styles.button} ${styles.returnButton}`}
            onClick={() => (window.location.href = "/")}
          >
            Tilbage til forsiden
          </button>
        </section>
      )}

      {/* Viser fejlbesked hvis status er "error" */}
      {status === "error" && (
        <section className={`${styles.message} ${styles.errorMessage}`}>
          <h1>Ups! Noget gik galt</h1>
          <p>Vi kunne desværre ikke modtage din indsendelse. Prøv venligst igen.</p>
          <button
            className={`${styles.button} ${styles.retryButton}`}
            onClick={handleRetry}
          >
            Prøv igen
          </button>
        </section>
      )}

      {/* Viser fejlbesked hvis datahentning fejlede */}
      {error && (
        <section className={`${styles.message} ${styles.errorMessage}`}>
          <h1>Fejl ved datahentning</h1>
          <p>{error}</p>
        </section>
      )}
    </main>
  );
};

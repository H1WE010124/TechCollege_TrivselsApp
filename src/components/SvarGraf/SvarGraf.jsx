import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./SvarGraf.module.scss";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { supabase } from "../../lib/supabaseClient";
import { Box, Typography } from "@mui/material";

// Registrér Chart.js elementer, så de kan bruges til at lave et søjlediagram
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const SvarGraf = ({ data, question, isbool }) => {
  // Data, der skal vises i søjlediagrammett
  /*  const testData = [
    {
      label: "Dårlig",
      count: 10,
      icon: <SentimentVeryDissatisfiedIcon style={{ color: "#388e3c" }} />,
    },
    {
      label: "Okay",
      count: 20,
      icon: <SentimentNeutralIcon style={{ color: "#388e3c" }} />,
    },
    {
      label: "God",
      count: 30,
      icon: <SentimentVerySatisfiedIcon style={{ color: "#388e3c" }} />,
    },
  ]; */

  // Dataopsætning til søjlediagrammet
  const chartData = {
    datasets: [
      {
        data: [data.filter((item) => item === 1).length],
        backgroundColor: "#2E7D32", // Farve på søjlerne
        label: "Uenig",
      },
      {
        data: [data.filter((item) => item === 2).length],
        backgroundColor: "#2E7D32", // Farve på søjlerne
        label: "Neutral",
      },
      {
        data: [data.filter((item) => item === 3).length],
        backgroundColor: "#2E7D32", // Farve på
        label: "Enig",
      },
    ],
    labels: [question.slice(0, 35) + "..."],
  };

  const chartDataBool = {
    datasets: [
      {
        data: [data.filter((item) => item === 1).length],
        backgroundColor: "#2E7D32", // Farve på søjlerne
        label: "Nej",
      },
      {
        data: [data.filter((item) => item === 2).length],
        backgroundColor: "#2E7D32", // Farve på søjlerne
        label: "Ja",
      },
    ],
    labels: [question.slice(0, 35) + "..."],
  };

  // Diagramindstillinger, f.eks. y-aksens skala og tooltip
  const chartOptions = {
    plugins: {
      legend: { display: false }, // Skjuler legend, da den ikke er nødvendig
      tooltip: { enabled: true }, // Aktiverer værktøjstip (tooltip) på hover
    },
    scales: {
      y: {
        beginAtZero: true, // Starter y-aksen fra 0
        max: 20, // Maksimumværdi på y-aksen
        ticks: {
          stepSize: 1, // Afstand mellem y-aksens markeringer
          callback: (value) => ([0, 5, 10, 15].includes(value) ? value : null), // Viser kun disse værdier
        },
      },
    },
  };

  return (
    <Box className={styles.container} aria-labelledby="spørgsmål-titel">
      {/* Overskrift med spørgsmålet */}
      <Typography variant="h2" id="spørgsmål-titel" className={styles.title}>
        {/*  {spørgsmål} */}
      </Typography>

      {/* Diagramvisning */}
      <Box className={styles.chartWrapper}>
        <Bar data={isbool ? chartDataBool : chartData} options={chartOptions} />
      </Box>
    </Box>
  );
};

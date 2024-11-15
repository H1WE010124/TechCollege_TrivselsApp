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

// Registrér Chart.js elementer, så de kan bruges til at lave et søjlediagram
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const SvarGraf = ({ spørgsmål }) => {
  const [studentData, setStudentData] = useState(null);

  // Data, der skal vises i søjlediagrammett
  const testData = [
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
  ];

  useEffect(() => {
    const getTodaysData = async () => {
      const { data, error } = await supabase
        .from("student_responses")
        .select("*, students (class_name)")
        .gt(
          "created_at",
          `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}T08:00:32.236853+00:00`
        );

      if (error) {
        console.log("Der opstod en fejl:", error);
        throw new Error(error);
      } else {
        let splitData = splitArrayByClass(data);
        setStudentData(splitData);
      }
    };

    getTodaysData();
  }, []);

  const splitArrayByClass = (array) => {
    const classArray = ["8U", "8V", "9U", "9V"];

    let c1 = array.filter((item) => item.students.class_name === classArray[0]);
    let c2 = array.filter((item) => item.students.class_name === classArray[1]);
    let c3 = array.filter((item) => item.students.class_name === classArray[2]);
    let c4 = array.filter((item) => item.students.class_name === classArray[3]);
    return [c1, c2, c3, c4];
  };

  console.log(studentData);

  // Brugertilstand til at holde styr på, hvilke kommentarer der er åbner
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  // Dataopsætning til søjlediagrammet
  const chartData = {
    labels: testData.map(() => ""), // Tøm labels for at undgå tekst under søjlerne
    datasets: [
      {
        label: "Svarfordeling", // Navn på datasættet (kan vises som tooltip)
        data: studentData[1]?.map((item) => item.option_id), // Henter `count` fra hvert element i testData til diagrammet
        backgroundColor: "#2E7D32", // Farve på søjlerne
      },
    ],
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

  // Funktion til at åbne og lukke kommentar-sektioner
  const toggleComments = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className={styles.container} aria-labelledby="spørgsmål-titel">
      {/* Overskrift med spørgsmålet */}
      <h2 id="spørgsmål-titel" className={styles.title}>
        {spørgsmål}
      </h2>

      {/* Diagramvisning */}
      <div className={styles.chartWrapper}>
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Kommentar-sektionen, der kan foldes ud */}
      <div className={styles.commentSection}>
        {testData.map((item, index) => (
          <div
            key={index}
            className={styles.commentToggle}
            onClick={() => toggleComments(index)}
          >
            {/* Viser ikon og antal svar */}
            <span className={styles.emojiLabel}>
              {item.icon} {item.count} svar
            </span>
            {/* Viser pil, der skifter retning afhængigt af om sektionen er åben eller lukket */}
            <span>{expandedIndexes.includes(index) ? "▲" : "▼"}</span>
            {/* Hvis sektionen er åben, vises kommentarer her */}
            {expandedIndexes.includes(index) && (
              <ul className={styles.commentList}>
                {item.comments?.map((comment, i) => (
                  <li key={i}>{comment}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Validering af komponentens prop-typerr
SvarGraf.propTypes = {
  spørgsmål: PropTypes.string.isRequired,
};

import React, { useState } from "react";
import styles from "./Question.module.scss";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Question = ({ callback, question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    callback(answer);
  };

  return (
    <Box className={styles.question}>
      <Typography variant="h2">{question}</Typography>
      <Box className={styles.options}>
        <Box
          onClick={() => handleAnswer(1)}
          className={`${styles.icon} ${
            selectedAnswer === 1 ? styles.selected : ""
          }`}
        >
          <SentimentVeryDissatisfiedIcon />
        </Box>
        <Box
          onClick={() => handleAnswer(2)}
          className={`${styles.icon} ${
            selectedAnswer === 2 ? styles.selected : ""
          }`}
        >
          <SentimentNeutralIcon />
        </Box>
        <Box
          onClick={() => handleAnswer(3)}
          className={`${styles.icon} ${
            selectedAnswer === 3 ? styles.selected : ""
          }`}
        >
          <SentimentVerySatisfiedIcon />
        </Box>
      </Box>
    </Box>
  );
};

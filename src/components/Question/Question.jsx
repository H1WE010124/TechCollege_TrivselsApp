import React, { useState } from "react";
import styles from "./Question.module.scss";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Box from "@mui/material/Box";

export const Question = ({ callback, question, currentIndex, array }) => {
  return (
    <Box className={styles.question}>
      <h2>{question}</h2>
      <Box className={styles.options}>
        <Box
          onClick={() => callback(array[currentIndex], 1)}
          className={`${styles.icon}`}
        >
          <SentimentVeryDissatisfiedIcon />
        </Box>
        <Box
          onClick={() => callback(array[currentIndex], 2)}
          className={`${styles.icon}`}
        >
          <SentimentNeutralIcon />
        </Box>
        <Box
          onClick={() => callback(array[currentIndex], 3)}
          className={`${styles.icon}`}
        >
          <SentimentVerySatisfiedIcon />
        </Box>
      </Box>
    </Box>
  );
};

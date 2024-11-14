import React, { useState } from "react";
import styles from "./Question.module.scss";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Box, Typography } from "@mui/material";

export const Question = ({ callback, question, currentIndex, array }) => {
  return (
    <Box className={styles.question}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "3rem", lg: "5.8rem" },
          padding: { xs: "16px", lg: "32px" },
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {question}
      </Typography>
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

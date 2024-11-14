import { Card as MUICard } from "@mui/material/Card";
import Box from "@mui/material/Box";
import s from "./Card.module.scss";
import { Typography } from "@mui/material";

export const Card = ({ children, currentQuestionIndex, totalQuestions }) => {
  return (
    <MUICard classname={s.card}>
      <Box classname={s.progress}>
        <Typography>
          {currentQuestionIndex + 1}/{totalQuestions}
        </Typography>
      </Box>
      <Box classname={s.content}>{children}</Box>
    </MUICard>
  );
};

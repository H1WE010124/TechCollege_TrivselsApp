import { Card as MUICard } from "@mui/material/Card";
import s from "./Card.module.scss";
import { Typography } from "@mui/material";

export const Card = ({ children, currentQuestionIndex, totalQuestions }) => {
  return (
    <MUICard classname={s.card}>
      <div classname={s.progress}>
        <Typography>
          {currentQuestionIndex + 1}/{totalQuestions}
        </Typography>
      </div>
      <div classname={s.content}>{children}</div>
    </MUICard>
  );
};

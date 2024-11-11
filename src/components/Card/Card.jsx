import { Card } from "@mui/material";
import s from "./Card.module.scss";
import { Typography } from "@mui/material";

export const QuestionCard = ({
  children,
  currentQuestionIndex,
  totalQuestions,
}) => {
  return (
    <Card className={s.card}>
      <div className={s.progress}>
        <Typography>
          {currentQuestionIndex + 1}/{totalQuestions}
        </Typography>
      </div>
      <div className={s.content}>{children}</div>
    </Card>
  );
};

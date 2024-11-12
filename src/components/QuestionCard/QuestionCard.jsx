import { Card } from "@mui/material";
import s from "./QuestionCard.module.scss";
import { Typography } from "@mui/material";

export const QuestionCard = ({
  children,
  currentQuestionIndex,
  totalQuestions,
}) => {
  return (
    <Card
      className={s.card}
      sx={{ color: "#ecffed", backgroundColor: "#2e7d32" }}
    >
      <div className={s.progress}>
        <Typography sx={{fontSize: '1.5rem'}}>
          {currentQuestionIndex + 1}/{totalQuestions}
        </Typography>
      </div>
      <div className={s.content}>{children}</div>
    </Card>
  );
};

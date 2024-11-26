import { Card, Typography, Box } from "@mui/material";
import s from "./QuestionCard.module.scss";

export const QuestionCard = ({
  children,
  currentQuestionIndex,
  totalQuestions,
}) => {
  return (
    <Card
      className={s.card}
      sx={{ color: "#ecffed", backgroundColor: "#2e7d32", height: "60vh" }}
    >
      <Box className={s.progress}>
        <Typography sx={{ fontSize: "1.8rem" }}>
          {currentQuestionIndex + 1}/{totalQuestions}
        </Typography>
      </Box>
      <Box className={s.content}>{children}</Box>
    </Card>
  );
};

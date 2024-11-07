import Box from "@mui/material/Box";

export const Question = ({ callback, question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    callback(answer);
  };

  return (
    <Box className={styles.question}>
      <h2>{question}</h2>
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

import React, { useState } from 'react';
import styles from './Question.module.scss';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

export const Question = ({ callback, question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    callback(answer);
  };

  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      <div className={styles.options}>
        <div
          onClick={() => handleAnswer(1)}
          className={`${styles.icon} ${selectedAnswer === 1 ? styles.selected : ''}`}
        >
          <SentimentVeryDissatisfiedIcon />
        </div>
        <div
          onClick={() => handleAnswer(2)}
          className={`${styles.icon} ${selectedAnswer === 2 ? styles.selected : ''}`}
        >
          <SentimentNeutralIcon />
        </div>
        <div
          onClick={() => handleAnswer(3)}
          className={`${styles.icon} ${selectedAnswer === 3 ? styles.selected : ''}`}
        >
          <SentimentVerySatisfiedIcon />
        </div>
      </div>
    </div>
  );
};

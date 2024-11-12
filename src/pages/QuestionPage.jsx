import { Box } from "@mui/material";
import questionArray from "../Data/QuestionData";
import { QuestionStepper } from "../components/QuestionStepper/QuestionStepper";
import { useEffect, useState } from "react";
import { useGet } from "../hooks/useGet";

export const QuestionPage = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = useGet("questions");

  console.log(data);

  const handleAnswer = (question, answer) => {
    setUserAnswers((prev) => [
      ...prev,
      { answerID: question.id, answer: answer },
    ]);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleAnswerBack = () => {
    let clone = [...userAnswers];
    clone.pop();
    setUserAnswers(clone);
  };

  useEffect(() => {
    console.log("Answers are; ", userAnswers);
  }, [userAnswers]);

  return (
    <Box>
      <QuestionStepper
        totalSteps={questionArray.length}
        currentStep={currentIndex}
        setCurrentStep={setCurrentIndex}
        backAction={handleAnswerBack}
      />

      <div>
        <p>{questionArray[currentIndex].quesiton}</p>
        <button
          onClick={() => handleAnswer(questionArray[currentIndex], false)}
        >
          NO
        </button>
        <button onClick={() => handleAnswer(questionArray[currentIndex], true)}>
          YES
        </button>
      </div>
    </Box>
  );
};

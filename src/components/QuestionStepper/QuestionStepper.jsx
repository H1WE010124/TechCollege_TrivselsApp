import { Button, MobileStepper } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export const QuestionStepper = ({
  totalSteps,
  currentStep,
  setCurrentStep,
  backAction,
}) => {
  const theme = useTheme();

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
    backAction();
  };

  return (
    <MobileStepper
      variant="progress"
      steps={totalSteps}
      position={"static"}
      activeStep={currentStep}
      nextButton={
        <Button
          size="small"
          variant="text"
          onClick={handleNext}
          disabled={true}
        >
          Næste
        </Button>
      }
      backButton={
        <Button
          size="small"
          variant="text"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          <KeyboardArrowLeft /> Tilbage
        </Button>
      }
    ></MobileStepper>
  );
};

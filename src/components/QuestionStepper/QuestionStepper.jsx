import { Button } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

export const QuestionStepper = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={steps}
      position={"static"}
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          variant="text"
          onClick={handleNext}
          disabled={activeStep === steps - 1}
        >
          Næste
        </Button>
      }
      backButton={
        <Button
          size="small"
          variant="text"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <KeyboardArrowLeft /> Tilbage
        </Button>
      }
    ></MobileStepper>
  );
};

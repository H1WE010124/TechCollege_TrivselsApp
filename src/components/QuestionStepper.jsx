import {
  MobileStepper as Mobile_Stepper,
  Step,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper as MUI_Stepper,
} from "@mui/material/Stepper";

export const Stepper = () => {
  return (
    <Mobile_Stepper>
      <Step>
        <StepLabel />
        <StepIcon />
        <StepContent />
        <StepButton />
      </Step>
      <StepConnector />
    </Mobile_Stepper>
  );
};

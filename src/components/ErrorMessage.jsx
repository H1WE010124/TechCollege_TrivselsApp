import Alert from "@mui/material/Alert";

export const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return <Alert severity="error">{error}</Alert>;
};

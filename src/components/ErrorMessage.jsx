import Alert from "@mui/material/Alert";

export const ErrorMessage = ({children}) => {
  return <Alert severity="error">{children}</Alert>;
};

import Button from "@mui/material/Button";

export const AppButton = ({ buttonText, callback }) => {
  return (
    <Button
      size="medium"
      variant="contained"
      onClick={callback}
      sx={{
        backgroundColor: "#2E7D32",
        color: "#FFFFFF",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#196B1D",
        },
      }}
    >
      {buttonText}
    </Button>
  );
};

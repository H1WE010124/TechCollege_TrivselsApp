import { Box, Button } from "@mui/material";
import style from "./IconButton.module.scss";

export const IconButton = ({ styling, callback, children, value }) => {
  return (
    <Box className={style.buttonContainer}>
      <Button className={`${style[styling]}`} onClick={() => callback(value)}>
        {children}
      </Button>
    </Box>
  );
};

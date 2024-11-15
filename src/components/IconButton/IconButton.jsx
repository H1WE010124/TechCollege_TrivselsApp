import { Box } from "@mui/material";
import style from "./IconButton.module.scss";

export const IconButton = ({ styling, callback, children, value }) => {
  return (
    <Box className={style.buttonContainer}>
      <button className={`${style[styling]}`} onClick={() => callback(value)}>
        {children}
      </button>
    </Box>
  );
};

import { IconButton } from "../IconButton/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import style from "./YesNo.module.scss";
import Box from "@mui/material/Box";

export const YesNo = ({ callback, array, currentIndex }) => {
  return (
    <Box className={style.yesno}>
      <IconButton
        callback={() => callback(array[currentIndex], 0)}
        styling="yesnoButtons"
        value="0"
      >
        <ThumbDownIcon style={{ fill: "#2E7D32" }} />
      </IconButton>
      <IconButton
        callback={() => callback(array[currentIndex], 1)}
        styling="yesnoButtons"
        value="1"
      >
        <ThumbUpIcon style={{ fill: "#2E7D32" }} />
      </IconButton>
    </Box>
  );
};

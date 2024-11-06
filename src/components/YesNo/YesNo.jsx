import { IconButton } from "../IconButton/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import style from "./YesNo.module.scss";

export const YesNo = ({ callback }) => {
  return (
    <div className={style.yesno}>
      <IconButton callback={callback} styling="yesnoButtons" value="0">
        <ThumbDownIcon style={{ fill: "#2E7D32" }} />
      </IconButton>
      <IconButton callback={callback} styling="yesnoButtons" value="1">
        <ThumbUpIcon style={{ fill: "#2E7D32" }} />
      </IconButton>
    </div>
  );
};

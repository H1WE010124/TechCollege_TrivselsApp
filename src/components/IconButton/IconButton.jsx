import style from "./IconButton.module.scss";
import Button from "@mui/material/Button";

export const IconButton = ({ styling, callback, children, value }) => {
  return (
    <Button className={`${style[styling]}`} onClick={() => callback(value)}>
      {children}
    </Button>
  );
};

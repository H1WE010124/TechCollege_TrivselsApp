import Box from "@mui/material/Box";
import s from "./Image.module.scss";

export const Image = ({ image_url }) => {
  return (
    <Box className={s.Image}>
      <img src={`url(${image_url})`} alt={`${image_url}`} />
    </Box>
  );
};

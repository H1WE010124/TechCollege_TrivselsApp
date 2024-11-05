import Box from "@mui/material/Box";
import s from "./Image.module.scss";

export const Image = ({ image_url, alt_text }) => {
  return (
    <Box className={s.Image}>
      <img src={image_url} alt={alt_text} />
    </Box>
  );
};

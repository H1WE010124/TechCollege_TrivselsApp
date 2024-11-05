import { ImageList, ImageListItem } from "@mui/material/ImageList";
import s from "./Image.module.scss";

export const Image = ({ imageData }) => {
  return (
    <ImageList className={s.ImageList}>
      {imageData.map((item) => (
        <ImageListItem key={item.url}>
          <img src={item.url} alt={item.altText} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

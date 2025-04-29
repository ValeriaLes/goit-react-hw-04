import s from "./ImageCard.module.css";
import { FaHeart } from "react-icons/fa";
export default function ImageCard({ picture, big = false, variant }) {
  return (
    <div className={s.imgContainer}>
      <img
        src={big ? picture.urls.regular : picture.urls.small}
        alt={picture.alt_description}
        className={variant === "small" ? s.smallPicture : s.bigPicture}
      />
      {variant === "big" && (
        <div className={s.likes}>
          <FaHeart />
          <p>{picture.likes}</p>
        </div>
      )}
    </div>
  );
}

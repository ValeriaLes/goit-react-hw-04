import ImageCard from "../components/ImageCard/ImageCard";
import s from "./ImageGallery.module.css"

export default function ImageGallery({ pictures, openModal}) {
  return (
    <ul className={s.list}>
      {pictures.map((picture) => (
        <li key={picture.id} onClick={()=> openModal(picture.id)} className={s.listItem}>
          <ImageCard picture={picture} variant="small" />
        </li>
      ))}
    </ul>
  );
}

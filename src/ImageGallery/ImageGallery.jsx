import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css"

export default function ImageGallery({ pictures, openModal}) {
  return (
    <ul>
      {pictures.map((picture) => (
        <li key={picture.id} onClick={()=> openModal(picture.id)}>
          <ImageCard picture={picture} />
        </li>
      ))}
    </ul>
  );
}

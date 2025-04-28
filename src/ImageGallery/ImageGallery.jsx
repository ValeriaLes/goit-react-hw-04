import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ pictures }) {
  return (
    <ul>
      {pictures.map((picture, index) => (
        <li key={`${picture.id}-${index}`}>
          <ImageCard picture={picture} />
        </li>
      ))}
    </ul>
  );
}

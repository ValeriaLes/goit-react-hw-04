export default function ImageCard({picture, big = false}) {
  return (
    <div>
 
      <img src={big ? picture.urls.regular : picture.urls.small} alt={picture.alt_description} />
     
    </div>
  );
}

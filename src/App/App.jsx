import { useEffect, useState } from "react";
import { fetchPicturesWithTopic } from "../articles-api";

import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [pictures, setPictures] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1)
 
  useEffect(() => {

    const abortController = new AbortController();
    async function getPictures() {
      try {
        if (searchTerm === "") {
          return;
        }
        setIsLoading(true);
        const response = await fetchPicturesWithTopic(searchTerm, page, abortController.signal);
        setPictures(prev => [...prev, ...response.data.results]);
        
        console.log(response.data)
      } catch  {
        setError(true)
      } finally {
        setIsLoading(false);
      }
    }
    getPictures();

    return () => {
        abortController.abort()
    }
  }, [searchTerm, page]);

  const handleLoadMoreBtn = () => {
    setPage(page + 1)
  }

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      {pictures.length > 0 && <ImageGallery pictures={pictures} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage/>}
     {pictures.length > 0 &&  <LoadMoreBtn handleBtn={handleLoadMoreBtn}/>}
    </>
  );
}

export default App;

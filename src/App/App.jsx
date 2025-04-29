import { useEffect, useState } from "react";
import { fetchPicturesWithTopic } from "../../articles-api";


import ImageGallery from "../ImageGallery/ImageGallery"
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [pictures, setPictures] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalPicture, setModalPicture] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    async function getPictures() {
      try {
        if (searchTerm === "") {
          return;
        }
        setIsLoading(true);
        const response = await fetchPicturesWithTopic(
          searchTerm,
          page,
          abortController.signal
        );
        setPictures((prev) => [...prev, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPictures();

    return () => {
      abortController.abort();
    };
  }, [searchTerm, page]);



  const handleLoadMoreBtn = () => {
    setPage(page + 1);
  };



  const handleSearchTerm = (termValue) => {
    setSearchTerm(termValue);
    setPictures([]);
    setPage(1);
  };



  function openModal(modalPictureId) {
    setIsOpen(true);
    const bigPicture = pictures.find(
      (picture) => picture.id === modalPictureId
    );
    setModalPicture(bigPicture);
  }



  function closeModal() {
    setIsOpen(false);
  }



  return (
    <>
      <SearchBar handleSearch={handleSearchTerm} />
      {pictures.length > 0 && (
        <ImageGallery pictures={pictures} openModal={openModal} />
      )}
      {isLoading && <Loader />}

      {error && <ErrorMessage />}
      {pictures.length > 0 && totalPages > page && (
        <LoadMoreBtn handleBtn={handleLoadMoreBtn} />
      )}
      <ImageModal
        closeModal={closeModal}
        modalPicture={modalPicture}
        modalIsOpen={modalIsOpen}
      />
    </>
  );
}

export default App;

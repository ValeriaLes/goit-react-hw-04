import Modal from "react-modal";
import ImageCard from "../ImageCard/ImageCard";

Modal.setAppElement("#root");

export default function ImageModal({ modalIsOpen, closeModal, modalPicture }) {
  const customStyles = {
    content: {
      border: "none",
      background: "none",
      inset: "unset",
      overflow: "hidden",
      padding: "0",
      outline: "none",
      maxWidth: "90vw",
      maxHeight: "90vh",
      width: "auto",
      height: "auto",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      {modalPicture && (
        <ImageCard picture={modalPicture} big={true} variant="big" />
      )}
    </Modal>
  );
}

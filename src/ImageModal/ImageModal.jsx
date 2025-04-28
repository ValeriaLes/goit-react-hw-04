import Modal from "react-modal";
import ImageCard from "../ImageCard/ImageCard";
Modal.setAppElement("#root");


export default function ImageModal({ modalIsOpen, closeModal, modalPicture }) {
  

 
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      // style={customStyles}
    >
      <button onClick={closeModal}>close</button>
      {modalPicture && (
         <ImageCard picture={modalPicture} big={true}/>
        )}
   
    </Modal>
  );
}

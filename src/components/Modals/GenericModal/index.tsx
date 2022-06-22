import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cloneElement, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function GenericModal({ children }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function toggleEdit() {
    setIsDisabled(!isDisabled);
  }

  const content = cloneElement(children, isDisabled);
  return (
    <div>
      <FontAwesomeIcon icon={faStar} onClick={openModal} />
      {/* <button onClick={openModal}>Open Modal</button>  */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {content}
        <button onClick={closeModal}>close</button>
        <button onClick={toggleEdit}>Edit</button>
      </Modal>
    </div>
  );
}

type Props = {
  children: any;
};

export default GenericModal;

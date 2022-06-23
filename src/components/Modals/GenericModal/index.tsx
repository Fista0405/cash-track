import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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

function GenericModal({ children, onConfirm }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const confirmActionHandler = async () => {
    await onConfirm();

    closeModal();
  };

  return (
    <div>
      <FontAwesomeIcon size="2x" icon={faTrash} onClick={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
        <button onClick={closeModal}>close</button>
        <button type="button" onClick={confirmActionHandler}>
          Confirm
        </button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}

type Props = {
  children: any;
  onConfirm?: Function;
};

export default GenericModal;

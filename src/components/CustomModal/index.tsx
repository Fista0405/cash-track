import { createPortal } from "react-dom";
import "./index.scss";

const CustomModal = ({ children, onConfirm, stateHandler }: Props) => {
  const modalContainer = document.getElementById("modal-containter");

  document.body.style.overflow = "hidden";

  const closeModal = () => {
    document.body.style.overflow = null;

    stateHandler(false);
  };

  const confirmActionHandler = async () => {
    await onConfirm();

    closeModal();
  };

  const modalWindow = (
    <div className="modal-containter" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="modal__buttons">
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
          <button type="button" onClick={confirmActionHandler}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalWindow, modalContainer);
};

type Props = {
  children: any;
  onConfirm: Function;
  stateHandler: Function;
};

export default CustomModal;
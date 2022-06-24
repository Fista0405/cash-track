import { useEffect } from "react";
import { createPortal } from "react-dom";

import "./index.scss";

const Modal = ({ children, stateHandler }: Props) => {
  const containter = document.getElementById("modal-container");

  document.body.style.overflow = "hidden";

  const closeModal = () => {
    document.body.style.overflow = null;

    stateHandler(false);
  };

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const modal = (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      ;
    </div>
  );

  return createPortal(modal, containter);
};

type Props = {
  children: any;
  stateHandler: Function;
};

export default Modal;

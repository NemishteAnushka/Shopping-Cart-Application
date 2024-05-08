import React from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";
function Modal({ children, handleModalClose }) {
  return createPortal(
    <>
      <div className={style.modalbackdrop} onClick={handleModalClose}></div>
      <div className={style.modalcontent}>{children}</div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;

import "./Modal.css";
import React from "react";

const ClickMuncher = ({ children }) => {
  return <div onClick={(e) => e.stopPropagation()}>{children}</div>;
};

const Modal = ({ children, isProjectBoxOpen, onClose }) => {
  if (!isProjectBoxOpen) {
    return null;
  }
  return (
    <div id="OverLay" onClick={onClose}>
      <ClickMuncher>
        <div id="Window" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </ClickMuncher>
    </div>
  );
};

export default Modal;

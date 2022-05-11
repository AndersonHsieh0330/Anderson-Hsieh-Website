import "./Modal.css";
import React from "react";

const ClickMuncher = ({ children }) => {
  return <div onClick={(e) => e.stopPropagation()}>{children}</div>;
};

const Modal = ({ isProjectBoxOpen, onClose }) => {
  if (!isProjectBoxOpen) {
    return null;
  }
  return (
    <div id="OverLay" onClick={onClose}>
      <ClickMuncher>
        <div id="Window" onClick={(e) => e.stopPropagation()}></div>
      </ClickMuncher>
    </div>
  );
};

export default Modal;

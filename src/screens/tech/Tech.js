import "./Tech.css";
import ProjectBox from "../../components/ProjectBox/ProjectBox.js";
import React, { useState } from "react";
import Modal from "../../components/Modal/Modal.js";
import { usePopper } from "react-popper";

const Tech = () => {
  const [isProjectBoxOpen, setOpenProjectBox] = useState(true);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <div id="TechContentContainer" ref={setReferenceElement}>
      <ProjectBox imgPath="e" onClick={() => setOpenProjectBox(true)} />
      <Modal
        isProjectBoxOpen={isProjectBoxOpen}
        onClose={() => setOpenProjectBox(false)}
        modalContent={<></>}
        ref={setPopperElement}
      />
    </div>
  );
};

export default Tech;

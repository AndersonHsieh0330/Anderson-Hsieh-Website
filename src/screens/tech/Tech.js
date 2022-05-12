import "./Tech.css";
import ProjectBox from "../../components/ProjectBox/ProjectBox.js";
import React, { useState } from "react";
import Modal from "../../components/Modal/Modal.js";
import { usePopper } from "react-popper";

//Project Pop up imports
import Bristle from "./projectpopup/Bristle/Bristle.js";
import Wat2Eat from "./projectpopup/Wat2Eat/Wat2Eat.js";

const Tech = () => {
  const [isProjectBoxOpen, setOpenProjectBox] = useState(false);

  const [projectPopUpKey, setProjectPopUpKey] = useState("Bristle");
  const projectPopUpContent = (projectPopUpKey) => {
    switch (projectPopUpKey) {
      case "Bristle":
        return <Bristle />;
      case "Wat2Eat":
        return <Wat2Eat />;
    }
  };

  return (
    <div id="TechContentContainer">
      <div id="leftProjectBoxesContainer">
        <ProjectBox
          imgPath="e"
          onClick={() => {
            setOpenProjectBox(true);
            setProjectPopUpKey("Bristle");
          }}
        />
        <ProjectBox
          imgPath="e"
          onClick={() => {
            setOpenProjectBox(true);
            setProjectPopUpKey("Wat2Eat");
          }}
        />
      </div>
      <div id="RightDescriptionContainer"></div>
      <Modal
        isProjectBoxOpen={isProjectBoxOpen}
        onClose={() => setOpenProjectBox(false)}
      >
        {projectPopUpContent(projectPopUpKey)}
      </Modal>
    </div>
  );
};

export default Tech;

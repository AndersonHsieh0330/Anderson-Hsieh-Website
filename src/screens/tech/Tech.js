import "./Tech.css";
import ProjectBox from "../../components/ProjectBox/ProjectBox.js";
import React, { useState } from "react";
import Modal from "../../components/Modal/Modal.js";

// Project Logos import
import VolleyToolsLogo from "../../assets/ProjectLogos/VolleyTools.svg";
import WMMALogo from "../../assets/ProjectLogos/WMMA.svg";
import PokemonGeneratorLogo from "../../assets/ProjectLogos/PokemonGen.svg";
import RatesUpLogo from "../../assets/ProjectLogos/RatesUp.svg";
import Wat2EatLogo from "../../assets/ProjectLogos/Wat2Eat.svg";
import HelpMeLogo from "../../assets/ProjectLogos/HelpMe.svg";
import BristleLogo from "../../assets/ProjectLogos/Bristle.svg";
import QRecipeLogo from "../../assets/ProjectLogos/QRecipe.svg";

// Project Pop up imports
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
          imgPath={Wat2EatLogo}
          onClick={() => {
            setOpenProjectBox(true);
            setProjectPopUpKey("Bristle");
          }}
        />
        <ProjectBox
          imgPath={WMMALogo}
          onClick={() => {
            setOpenProjectBox(true);
            setProjectPopUpKey("Wat2Eat");
          }}
        />
        <ProjectBox
          imgPath={VolleyToolsLogo}
          onClick={() => {
            setOpenProjectBox(true);
            setProjectPopUpKey("Wat2Eat");
          }}
        />
        <ProjectBox
          imgPath={PokemonGeneratorLogo}
          onClick={() => {
            setOpenProjectBox(true);
            setProjectPopUpKey("Wat2Eat");
          }}
        />
        <ProjectBox
          imgPath={RatesUpLogo}
          onClick={() => {
            setOpenProjectBox(true);
            setProjectPopUpKey("Wat2Eat");
          }}
        />
        <ProjectBox
          imgPath={HelpMeLogo}
          onClick={() => {
            setOpenProjectBox(true);
            setProjectPopUpKey("Wat2Eat");
          }}
        />
        <ProjectBox
          imgPath={BristleLogo}
          onClick={() => {
            setOpenProjectBox(true);
            setProjectPopUpKey("Wat2Eat");
          }}
        />
        <ProjectBox
          imgPath={QRecipeLogo}
          onClick={() => {
            setOpenProjectBox(true);
            setProjectPopUpKey("Wat2Eat");
          }}
        />
      </div>
      <div id="RightDescriptionContainer">
        <div id="TechTextContainer">
          <h2>Tech</h2>
          <p>
            Technology is where I accelerate professionally. I’m on my way of
            becoming a well-rounded software engineer who is capable of
            constructing all aspects of a system, from frontend, backend and
            even to the hardware level. Personal projects, school, design teams,
            and internships allowed me to gain experience in different tech
            stacks. All this will prepare myself with the technical foundations
            that I need to pitch my start up.
            <br />
            <br />
            Here are some of my projects that I'd like to share with you, enjoy.
          </p>
          <p></p>
          <div id="TechDividor_1" />
          <div id="TechItemContainer">
            <h3>Languages</h3>
            <p>Java, Kotlin, C++, Javascript, HTML, CSS</p>
            <h3>Framework/Tool</h3>
            <p>Android, Spring, React.js, React Native, Docker, Git</p>
          </div>
        </div>
      </div>
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

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
          <h2>My Fish Keeping Weekly Updates!</h2>
          <p>
            I've had the water running in the 10 gallon tank since last Monday
            when I first moved into my apartment. This week on Monday I decided
            to move the swordtails over to the big tank so they're not getting
            so crowded with the Lampeye's in the 2.5 gallon. It worked well they
            were active and eating the first couple of days, but one of them
            actually started to lose color on Friday which is kind of weird.
            Still eating, swimmig around and everything, will have to keep an
            eye on it.
          </p>
          <div id="TechDividor_1" />
          <div id="TechItemContainer">
            <h3>Languages</h3>
            <p>Java, Kotlin, C++, Javascript, HTML, CSS</p>
            <h3>Framework/Tool</h3>
            <p>Android, React.js, React Native, Docker, Git</p>
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

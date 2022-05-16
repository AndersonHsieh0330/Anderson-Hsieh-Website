import "./Resume.css";
import React, { useState } from "react";
import DownloadResumeBTNImg_Pressed from "../../assets/pixelart/svg/DownloadResumeBTN_pressed.svg";
import DownloadResumeBTNImg from "../../assets/pixelart/svg/DownloadResumeBTN.svg";
import ResumeFile from "./Resume_AndersonHsieh.pdf";
import { Link } from "react-router-dom";

const Resume = () => {
  const [isBTNPressed, setPressed] = useState(false);

  const BTNImg = isBTNPressed
    ? DownloadResumeBTNImg_Pressed
    : DownloadResumeBTNImg;

  return (
    <div id="ResumeContainer">
      <a href={ResumeFile} download>
        <img
          id="DownloadResumeBTN"
          src={BTNImg}
          onMouseDown={() => {
            setPressed(true);
          }}
          onMouseUp={() => {
            setPressed(false);
          }}
        />
      </a>
    </div>
  );
};

export default Resume;

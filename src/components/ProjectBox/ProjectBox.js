import "./ProjectBox.css";
import React from "react";

//a floating box with project img on it
//pop up window description when clicked
const ProjectBox = ({ imgPath, onClick }) => {
  return (
    <div id="Box" onClick={onClick}>
      <img src={imgPath} />
    </div>
  );
};

export default ProjectBox;

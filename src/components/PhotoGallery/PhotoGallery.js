import "./PhotoGallery.css";
import React from "react";
import RightArrow from "../../assets/pixelart/svg/rightarrow.svg";
import LeftArrow from "../../assets/pixelart/svg/leftarrow.svg";

const BottomMenu = (props) => {
  return (
    <div id="PhotoGalleryContainer">
      <img className="PixelImage" src={LeftArrow} />
      <div className="ImageContainer">
        <img className="Image" src={props.linkedlist.getFront().imgPath} />
        <p>I'm catching shrimps</p>
      </div>
      <img className="PixelImage" src={RightArrow} />
    </div>
  );
};

export default BottomMenu;

import "./PhotoGallery.css";
import React, { useState } from "react";
import RightArrow from "../../assets/pixelart/svg/rightarrow.svg";
import LeftArrow from "../../assets/pixelart/svg/leftarrow.svg";

const BottomMenu = (props) => {
  var numOfImages = props.myImages.length;
  const [imgIndex, setImgIndex] = useState(0);
  function nextImgCircular() {
    setImgIndex((imgIndex + 1) % numOfImages);
  }
  function previousImgCircular() {
    if (imgIndex - 1 < 0) {
      setImgIndex(numOfImages - 1);
      return;
    }
    setImgIndex(imgIndex - 1);
  }

  return (
    <div id="PhotoGalleryContainer">
      <img
        className="PixelImage"
        src={LeftArrow}
        onClick={() => previousImgCircular()}
      />
      <div className="ImageContainer">
        <img className="Image" src={props.myImages[imgIndex].imgPath} />
        <p className="ImgDescription">
          {props.myImages[imgIndex].imgDescriptionEng}
        </p>
        <p className="ImgDescription">
          {props.myImages[imgIndex].imgDescriptionMan}
        </p>
      </div>
      <img
        className="PixelImage"
        src={RightArrow}
        onClick={() => nextImgCircular()}
      />
    </div>
  );
};

export default BottomMenu;

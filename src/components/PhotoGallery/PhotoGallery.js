import "./PhotoGallery.css";
import React, { useState } from "react";
import RightArrow from "../../assets/pixelart/svg/rightarrow.svg";
import LeftArrow from "../../assets/pixelart/svg/leftarrow.svg";
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";

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
        id="LeftArrowPixelImage"
        src={LeftArrow}
        onClick={() => previousImgCircular()}
      />
      <div className="ImageContainer">
        {props.myImages[imgIndex].isVideo ? (
          <video
            src={props.myImages[imgIndex].imgPath}
            style={{ height: props.height, width: props.width }}
            controls
          />
        ) : (
          <img
            className="Image"
            style={{
              /* This photo has width:height ratio of 4:3 */
              height: props.height,
              width: props.width,
            }}
            src={props.myImages[imgIndex].imgPath}
          />
        )}
        <div
          className="ImgDescription"
          style={{
            marginTop: "5px",
            marginBottom: "0px",
            fontSize: "1.5vh",
            textIndent: "0",
            width: props.width,
            lineHeight: "2em",
          }}
        >
          {props.myImages[imgIndex].imgDescriptionEng}
        </div>
        <p
          className="ImgDescription"
          style={{
            marginTop: "5px",
            marginBottom: "0px",
            textIndent: "0",
            fontSize: "1.5vh",
            width: props.width,
            lineHeight: "2em",
          }}
        >
          {props.myImages[imgIndex].imgDescriptionMan}
        </p>
      </div>
      <img
        id="RightArrowPixelImage"
        src={RightArrow}
        onClick={() => nextImgCircular()}
      />
    </div>
  );
};

export default BottomMenu;

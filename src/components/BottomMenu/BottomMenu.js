import "./BottomMenu.css";
import React from "react";
import HeartLogo from "../../assets/pixelart/svg/heart.svg";
import FishLogo from "../../assets/pixelart/svg/fish.svg";
import VolleyballLogo from "../../assets/pixelart/svg/volleyball.svg";
import CodeLogo from "../../assets/pixelart/svg/code.svg";
import ScrollLogo from "../../assets/pixelart/svg/scroll.svg";
import PhoneLogo from "../../assets/pixelart/svg/phone.svg";
import { NavLink, Link } from "react-router-dom";

const BottomMenu = () => {
  return (
    <div className="BottomMenuContainer">
      <ul className="MenuList">
        <li>
          <NavLink to="/Anderson-Hsieh-Website/">
            <img className="PixelImage" src={HeartLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Anderson-Hsieh-Website/fish">
            <img className="PixelImage" src={FishLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Anderson-Hsieh-Website/volleyball">
            <img className="PixelImage" src={VolleyballLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Anderson-Hsieh-Website/tech">
            <img className="PixelImage" src={CodeLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Anderson-Hsieh-Website/resume">
            <img className="PixelImage" src={ScrollLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts">
            <img className="PixelImage" src={PhoneLogo} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;

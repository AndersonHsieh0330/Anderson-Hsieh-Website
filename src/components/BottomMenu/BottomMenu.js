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
          <NavLink to="/">
            <img className="PixelImage" src={HeartLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/fish">
            <img className="PixelImage" src={FishLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/volleyball">
            <img className="PixelImage" src={VolleyballLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/tech">
            <img className="PixelImage" src={CodeLogo} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume">
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

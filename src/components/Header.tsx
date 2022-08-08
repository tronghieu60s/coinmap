import React from "react";
import menu from "../assets/icons/menu.svg";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header-logo" />
      <div className="header-menu">
        <img src={menu} alt="menu" />
      </div>
    </header>
  );
}

import React from "react";
import Logo from "../../assets/logo.png";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img className="header__logo-box--logo" src={Logo} alt="" />
      </div>
      <ul className="nav-bar">
        <li className="nav-bar__item">Contact us</li>
        <li className="nav-bar__item"> Terms </li>
        <li className="nav-bar__item">Sign In</li>
        <li className="nav-bar__item">Sign Up</li>
      </ul>
    </header>
  );
};

export default Header;

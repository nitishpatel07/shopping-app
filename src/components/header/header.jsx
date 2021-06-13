import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assests/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      <div className="options">
        <span className="option">HOME</span>
        <span className="option">SHOP</span>
        <span className="option">SIGN IN</span>
      </div>
    </div>
  );
};

export default Header;

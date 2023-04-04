import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="image not loading"
      />
      <div className="header-search">
        <input type="text" className="header-search-input" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-section1">Hello</span>
          <span className="header-option-secction2">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-option-section1">Returns</span>
          <span className="header-option-secction2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-section1">Your</span>
          <span className="header-option-secction2">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

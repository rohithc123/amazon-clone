import React from "react";
import {default as SearchIcon} from "@mui/icons-material/Search";
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
        {/* <img src="{searchIcon}" alt="" className="header-search-icon" /> */}
        <SearchIcon className="header-search-icon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-section1">Hello Guest</span>
          <span className="header-option-section2">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-option-section1">Returns</span>
          <span className="header-option-section2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-section1">Your</span>
          <span className="header-option-section2">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

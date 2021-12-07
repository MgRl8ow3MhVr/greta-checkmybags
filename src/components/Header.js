import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="sideBoxes">
        <span>Trendy Bags</span>
        <div className="basket">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
            <line x1="3" y1="22" x2="21" y2="22"></line>
          </svg>
        </div>
      </div>
      <div className="sideBoxes">
        <span>Collection</span>
        <span>Product</span>
        <span>Philosophy</span>
      </div>
    </div>
  );
};

export default Header;

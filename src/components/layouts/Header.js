import React from "react";
import "./layout.css";

const Header = () => {
  return (
    <header>
      <div className="header-wrap">
        <div className="search-input">
          <input
            type="text"
            className="form-tag"
            placeholder="Search templates"
          />
        </div>
        <div className="sort-row">
          <span className="sort-items">Sort By: </span>
          <input type="text" className="form-tag sort-items" />
          <input type="text" className="form-tag sort-items" />
          <input type="text" className="form-tag sort-items" />
        </div>
      </div>
    </header>
  );
};

export default Header;

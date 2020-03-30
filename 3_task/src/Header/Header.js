import React from "react";
import "./Header.css";

const Header = () => {
  const date = new Date();
  return (
    <div className="header">
      <div id="counter">
        <h1>Counter</h1>
      </div>
      <div id="date">
        <p>{date.toDateString()}</p>
      </div>
    </div>
  );
};

export default Header;

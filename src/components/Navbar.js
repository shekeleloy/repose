import React from "react";
import logo from '../img/logo.png';


function Navbar() {
  return (
    <div className="nav-container">
      <div className="navbar">
          <img src={logo} alt="repose" className="logo"></img>
      </div>
    </div>
  );
}

export default Navbar;

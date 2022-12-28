import React from "react";
import "../style/admin/adminlogin.css";
import { useState } from "react";

const Login = () => {

    const [popupStyle, showPopup] = useState("hide");

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

  return (
    <div className="ad-log">
      <div className="logo1">
        <img src={require("../img/logo.png")} />
      </div>
      

      <div className="adminlog-form">
        <h1>Admin Login</h1>
        <input type="text" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <div className="login-btn" onClick={popup}>Login</div>
      </div>
      
    <div className={popupStyle}>
    <h3>Login Failed</h3>
    <p>Username or Password are Incorrect</p>
    </div>
    </div>
  );
};

export default Login;

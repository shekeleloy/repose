import React from 'react';
import "../style/adminlogin.css";

const Login = () => {
    return (
        <div className="log-container">
            <div className="logo1">
            <iframe src="https://drive.google.com/file/d/1c3hL5cNe-bnkvQ4ZmdMAGr8px5UBpdzY/preview" width="640" height="480"/>
            </div>
            <div className="adminlog-form">
            <h1>Login</h1>
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Enter Password" />
            </div>
        </div>
    );
}

export default Login;

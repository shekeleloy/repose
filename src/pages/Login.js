import React from "react";
import { redirect } from "react-router-dom";
import { useState } from "react";
import { Baseurl } from "../API/config";
import axios from "axios";
import "../style/userlogin.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleLogin() {
    // perform login logic, then set isLoggedIn to true
    axios
      .post(Baseurl + "/users/auth", {
        user_email: email,
        user_password: password,
      })
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        console.log(isLoggedIn);
        localStorage.setItem("token", res.data.payload.token);
        console.log(localStorage.getItem("token"));
      })
      .catch((err) => {
        console.log(err);
        console.log("sample err message");
      })
      .finally(() => {});
  }

  // if (isLoggedIn) {
  //   return redirect("/dashboard");
  // }
  return (
    <div className="ad-log">
      <div className="logo1">
        <img src={require("../img/logo.png")} />
      </div>

      <div className="adminlog-form">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <div className="login-btn" onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;

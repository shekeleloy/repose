import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserApp from "./user/UserApp"; 
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
    <UserApp />
    <App />
  </React.StrictMode>
);

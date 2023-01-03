import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// Pages
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Leaves from "./pages/Leaves";
import AddUser from "./pages/Add_User";

import "./App.css";

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add_user" element={<AddUser />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/leaves" element={<Leaves />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
}

export default App;

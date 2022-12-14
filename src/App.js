import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// Components
import Sidebar from "./components/Sidebar";

// Pages
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Leaves from "./pages/Leaves";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/leaves" element={<Leaves />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

// Pages
import Calendar from "../../pages/Calendar";
import Dashboard from "../../pages/Dashboard";
import Leaves from "../../pages/Leaves";
import AddUser from '../../pages/Add_User';

const Router = () => {
    return (
        <div>
        <BrowserRouter>
        <Navbar />
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add_user" element={<AddUser />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/leaves" element={<Leaves />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
        </div>
    );
}

export default Router;

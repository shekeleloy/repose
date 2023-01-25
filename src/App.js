import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UserSidebar from "./components/user_component/usersidebar";

// Pages of admin
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Leaves from "./pages/Leaves";
import AddUser from "./pages/Add_User";
import Login from "./pages/Login";

// Pages of user
import UserDash from "./user/user-page/User_Dash";
import UserCalendar from "./user/user-page/User_Calendar";
import LeaveForm from "./user/user-page/ApplyLeave";
import UserLeaves from "./user/user-page/User_Leaves"; //one period ok na to call the page

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />

          {/* admin */}
          <Route path="/admin">
            <Route
              path="dashboard"
              element={
                <Sidebar>
                  <Dashboard />
                </Sidebar>
              }
            />
            <Route
              path="add_user"
              element={
                <Sidebar>
                  <AddUser />
                </Sidebar>
              }
            />
            <Route
              path="calendar"
              element={
                <Sidebar>
                  <Calendar />
                </Sidebar>
              }
            />
            <Route
              path="leaves"
              element={
                <Sidebar>
                  <Leaves />
                </Sidebar>
              }
            />
          </Route>

          {/* User */}
          <Route path="/user">
            <Route
              path="dashboard"
              element={
                <UserSidebar>
                  <UserDash />
                </UserSidebar>
              }
            />
            <Route
              path="calendar"
              element={
                <UserSidebar>
                  <UserCalendar />
                </UserSidebar>
              }
            />
            <Route
              path="applyleave"
              element={
                <UserSidebar>
                  <LeaveForm />
                </UserSidebar>
              }
            />
            <Route
              path="user_leaves"
              element={
                <UserSidebar>
                  <UserLeaves />
                </UserSidebar>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

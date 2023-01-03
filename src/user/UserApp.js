import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";

// Component
import UserSidebar from '../components/user_component/usersidebar';
import Navbar from '../components/Navbar';

// Page
import UserDash from './user-page/User_Dash';
import UserCalendar from '../user/user-page/User_Calendar';
import LeaveForm from '../user/user-page/ApplyLeave';

const UserApp = () => {
    return (
        <div className="user-app">
        <BrowserRouter>
        <Navbar />
          <UserSidebar>
            <Routes>
              <Route path="/dashboard" element={<UserDash />} />
              <Route path="/calendar" element={<UserCalendar />} />
              <Route path="/applyleave" element={<LeaveForm />} />
            </Routes>
          </UserSidebar>
        </BrowserRouter>
        </div>
    );
}

export default UserApp;

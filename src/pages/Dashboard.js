import React from "react";
import DashGrid from "../components/DashGrid";

const Dashboard = () => {
  return (
    <div className="ad-dash">
      <h1>Dashboard</h1>
      <div className="ad-container">
        <DashGrid />
      </div>
    </div>
  );
};

export default Dashboard;

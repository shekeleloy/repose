import React from "react";

const UserDash = () => {
  return (
    <div className="ad-dash">
      <h1>Dashboard</h1>
      <div className="ad-container">
        <div className="grid-container">
          <div className="employee-grid">
            <div>
              <h2 className="employee">Leave Duration</h2>
              <div className="count1">
                <h2>10 Days</h2>
              </div>
            </div>
          </div>
          <div className="leaves-grid">
            <div>
              <h2 className="leave">Leave type</h2>
              <div className="count2">
                <h2>Vacation Leave</h2>
              </div>
            </div>
          </div>
          <div className="approved-grid">
            <div>
              <h2 className="approved">Leave Status</h2>
              <div className="count3">
                <h2>Approved</h2>
              </div>
            </div>
          </div>
          <div className="pending-grid">
            <div>
              <h2 className="pending">Used Leave</h2>
              <div className="count4">
                <h2>10</h2>
              </div>
            </div>
          </div>
          <div className="declined-grid">
            <div>
              <h2 className="declined">Balance</h2>
              <div className="count5">
                <h2>20</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;

import React from "react";
import "../style/admin/leaves.css";

const Leaves = () => {
  return (
    <div>
      <div className="leaves">
        <div className="profile">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profile"></img>
            <p>Name...</p>
        </div>
        <div className="leave-type">
          <p>Leave Type</p>
        </div>
        <button>Open</button>
      </div>
    </div>
  );
};

export default Leaves;
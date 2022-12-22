import React from "react";
import { useState } from "react";
import { Calendar } from "react-calendar";

// CSS
import "../style/calendar.css";

const Calendartable = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="con-1">
      <h2>Calendar</h2>
      <div className="calendar-container">
        <Calendar
          calendarType="US"
          className="calendar"
          onChange={setDate}
          value={date}
        />
      </div>
    </div>
  );
};

export default Calendartable;

import React from "react";
import Calendar from "react-calendar";
import "tailwindcss/tailwind.css";

const CalendarComponent = () => {
  return (
    <div className="w-80 h-60 bg-black-200 rounded-lg shadow-md flex justify-center items-center relative">
      <div className="absolute w-72 h-60 bg-green-600 rounded-lg shadow-md flex justify-center items-center">
        <div className="text-gray italic font-sans">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;

import React, { useState, useEffect } from "react";
import ReactClock from "react-clock";
import "react-clock/dist/Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setTime(new Date());
  }

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="flex justify-center items-center h-full">
      {/* <div className="clock-container">
        <ReactClock value={time} />
      </div> */}
      <div className="bg-green-800 clock-two text-5xl text-gray-300 rounded-lg">
        <p className="w-48 h-20 flex justify-center mt-6">{formattedTime}</p>
      </div>
    </div>
  );
}

export default Clock;

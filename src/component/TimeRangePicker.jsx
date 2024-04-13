import React from "react";
import TimePicker from "./Timepicker";

const TimeRangePicker = () => {
  return (
    <div className="grid grid-cols-2 bg-black">
      <div className=" border-opacity-50 border-r border-white">
        <label className="block mb-2 text-center font-bold text-white">From Time:</label>
        <TimePicker get/>
      </div>
      <div className="border-opacity-50 border-l border-white">
        <label className="block mb-2 text-center font-bold text-white">Till Time:</label>
        <TimePicker />
      </div>
    </div>
  );
};

export default TimeRangePicker;

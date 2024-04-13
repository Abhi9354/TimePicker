import React, { useState, useRef } from "react";

const TimePicker = () => {
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");

  const hourRef = useRef(null);
  const minuteRef = useRef(null);

  const handleHourScroll = () => {
    if (hourRef.current) {
      const maxScroll = (hourRef.current.scrollHeight - hourRef.current.clientHeight) || 0;
      setSelectedHour(prevHour => {
        const newHour = Math.round(hourRef.current.scrollTop / 40);
        return Math.min(Math.max(newHour, 0), 23).toString().padStart(2, "0");
      });
    }
  };

  const handleMinuteScroll = () => {
    if (minuteRef.current) {
      const maxScroll = (minuteRef.current.scrollHeight - minuteRef.current.clientHeight) || 0;
      setSelectedMinute(prevMinute => {
        const newMinute = Math.round(minuteRef.current.scrollTop / 40);
        return Math.min(Math.max(newMinute, 0), 59).toString().padStart(2, "0");
      });
    }
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  const handleMinuteClick = (minute) => {
    setSelectedMinute(minute);
  };

  const hours = Array.from({ length: 24 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));
  const minutes = Array.from({ length: 60 }, (_, i) => (i < 10 ? `0${i}` : `${i}`));

  return (
    <>
      <div className="time-picker flex flex-col items-center  h-32  bg-gray-200 w-full">
        <div className="time-picker-container flex w-full h-64  overflow-hidden">
          <div className="hour-scroll w-1/2 h-full scroll-container overflow-x-hidden overflow-y-auto scrooll-smooth" onScroll={handleHourScroll} ref={hourRef}>
            {hours.map((hour) => (
              <div
                key={hour}
                className={`time-picker-item text-white ${selectedHour === hour ?"bg-zinc-900" : "bg-black"} cursor-pointer flex justify-center items-center h-12`}
                onClick={() => handleHourClick(hour)}
              >
                {hour}
              </div>
            ))}
          </div>
          <div className="minute-scroll w-1/2 h-full scroll-container overflow-x-hidden overflow-y-auto scrooll-smooth" onScroll={handleMinuteScroll} ref={minuteRef}>
            {minutes.map((minute) => (
              <div
                key={minute}
                className={`time-picker-item text-white ${selectedMinute === minute ?"bg-zinc-900" : "bg-black"} cursor-pointer flex justify-center items-center h-12`}
                onClick={() => handleMinuteClick(minute)}
              >
                {minute}
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className="selected-time w-full bg-zinc-900 text-white h-16 flex justify-center items-center text-2xl font-bold">{`${selectedHour}:${selectedMinute}`}</div>
    </>
  );
};

export default TimePicker;

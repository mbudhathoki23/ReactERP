import React, { useState } from "react";
import CounterWrapper from "./CounterWrapper";
import Counter from "react-countdown-customizable";
import Particle from "../particles/Particle";

const Counters = () => {
  const [endDate, setEndDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  });

  const handleComplete = () => {
    setEndDate((prevEndDate) => {
      const newEndDate = new Date(prevEndDate);
      newEndDate.setDate(newEndDate.getDate() + 7);
      return newEndDate;
    });
  };

  return (
    <CounterWrapper>
      <Particle />
      <Counter
        date={endDate}
        timerStyle={{ marginTop: "10px" }}
        counterStyle={{
          fontSize: "32px",
          color: "white",
          border: "1px solid #5b21b6",
          padding: "10px",
          margin: "5px",
          backgroundColor: "#5b21b6",
        }}
        labelStyle={{
          color: "",
          fontSize: "12px",
          textTransform: "uppercase",
          fontWeight: "800",
        }}
        onComplete={handleComplete}
      />
    </CounterWrapper>
  );
};

export default Counters;

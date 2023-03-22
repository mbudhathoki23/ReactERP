import React, { useState } from "react";
import CounterWrapper from "./CounterWrapper";
import Counter from "react-countdown-customizable";

const Counters = () => {
  const [endDate, setEndDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  });

  const handleComplete = () => {
    const currentDate = new Date();
    const newEndDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
    setEndDate(newEndDate);
  };

  return (
    <CounterWrapper>
      <Counter
        date={endDate}
        timerStyle={{ marginTop: "10px" }}
        counterStyle={{
          color: "white",
          border: "1px solid #5b21b6",
          padding: "10px",
          margin: "5px",
          backgroundColor: "#5b21b6",
        }}
        labelStyle={{
          color: "",
          fontSize: "10px",
          textTransform: "uppercase",
          fontWeight: "800",
        }}
        onComplete={handleComplete}
      />
    </CounterWrapper>
  );
};

export default Counters;

import React from "react";
import CounterWrapper from "./CounterWrapper";
import Counter from "react-countdown-customizable";

const Counters = () => {
  return (
    <CounterWrapper>
      <Counter
        date="2023-03-25T24:00:00"
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
      />
    </CounterWrapper>
  );
};

export default Counters;

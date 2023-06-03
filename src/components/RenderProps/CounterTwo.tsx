import React from "react";

type Props = {
  count: number;
  handleIncrease: () => void;
};

const CounterTwo = (props: Props) => {
  return (
    <button
      style={{
        padding: "1rem",
        fontSize: "1.5rem",
        cursor: "pointer",
        border: "none",
        background: "Green",
        borderRadius: "0.5rem",
        color: "#fff",
      }}
      onClick={props.handleIncrease}
    >
      {props.count}
    </button>
  );
};

export default CounterTwo;

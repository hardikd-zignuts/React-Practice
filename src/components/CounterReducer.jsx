import React, { useReducer } from "react";
const initialValue = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;

    case "decrement":
      return currentState - 1;

    case "reset":
      return initialValue;

    default:
      return currentState;
  }
};

const CounterReducer = () => {
  const [value, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <div>Counter {value}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default CounterReducer;

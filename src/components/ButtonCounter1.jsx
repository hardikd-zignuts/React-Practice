import React from "react";
import useCounter from "../Hooks/useCounter";

const ButtonCounter1 = () => {
  const [Increment, Decrement, Reset, count] = useCounter(0, 100);
  return (
    <div>
      Count : {count}
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default ButtonCounter1;

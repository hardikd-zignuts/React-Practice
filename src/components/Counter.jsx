import React, { useState } from "react";

const Counter = ({ render, children }) => {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);

  return <div>{render(count, handleCount)}</div>;
};

export default Counter;

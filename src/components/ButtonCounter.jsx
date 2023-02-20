import React from "react";

const ButtonCounter = (props) => {
const {count, handleCount} = props
  return (
    <div>
      <button onClick={handleCount}>Click {count} times</button>
    </div>
  );
};

export default ButtonCounter;

import React from "react";

const HoverButton = (props) => {
  const { count, handleCount } = props;
  return (
    <div>
      <button onMouseOver={handleCount}>Click {count} times</button>
    </div>
  );
};

export default HoverButton;

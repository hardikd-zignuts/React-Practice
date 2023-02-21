import React from "react";

const DemoButton = ({ name, children }) => {
  return (
    <div>
      <div>{name} and {children}</div>
      {console.log(children)}
    </div>
  );
};

export default DemoButton;

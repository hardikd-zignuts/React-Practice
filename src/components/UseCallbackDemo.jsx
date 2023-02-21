import React from "react";
import Counter from "./Counter";
import DemoButton from "./DemoButton";

const useCallbackDemo = () => {
  return (
    <div>
      <h1>useCallback Hook</h1>
      <DemoButton name="hardik" > I am children</DemoButton>
    </div>
  );
};

export default useCallbackDemo;

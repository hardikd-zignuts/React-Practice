import React, { useState } from "react";
import useDocumentTitle from "../Hooks/useDocumentTitle";

const useCallbackDemo = () => {
  const [num, setNum] = useState(0);
  useDocumentTitle(num)
  return (
    <div>
      <h1>Custom Hooks</h1>
      Num is {num}
      <button onClick={() => setNum((prevState) => prevState + 1)}>Click</button>
    </div>
  );
};

export default useCallbackDemo;

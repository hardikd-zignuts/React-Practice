import React, { useEffect, useState } from "react";

const TitleEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `clicked ${count} time`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Click
      </button>
      <div>{count}</div>
    </div>
  );
};

export default TitleEffect;

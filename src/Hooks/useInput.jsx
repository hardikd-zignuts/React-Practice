import { useState } from "react";

const useInput = (initialValue) => {
  const [name, setName] = useState(initialValue);

  const reset = () => {
    setName(initialValue);
  };

  const obj = {
    value :name,
    onChange: (e) => {
      setName(e.target.value);
    },
  };
  return [name, obj, reset];
};

export default useInput;

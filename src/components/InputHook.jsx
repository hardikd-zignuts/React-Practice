import React from "react";
import useInput from "../Hooks/useInput";

const InputHook = () => {
  const [firstName, firstObj, resetFirst] = useInput("");
  const [lastName, lastObj, resetLast] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirst();
    resetLast();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input {...firstObj} type="text" placeholder="First name" />
        </div>
        <div>
          <input {...lastObj} type="text" placeholder="Last name" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default InputHook;

import React from "react";
import { useContext } from "react";
import {UserContext} from "../context/userContext";

const ComponentB = () => {
  const { num, setNum } = useContext(UserContext);
  return (
    <div>
      <button onClick={()=>(setNum(num+1))}>Clicked {num} time</button>
    </div>
  );
};
export default ComponentB;

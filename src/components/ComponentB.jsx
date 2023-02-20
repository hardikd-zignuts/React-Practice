import React from "react";
import { UserConsumer } from "../context/userContext";

const ComponentB = () => {
  return (
    <UserConsumer>
      {(username) => {
        return <h1>Hello {username}</h1>;
      }}
    </UserConsumer>
  );
};

export default ComponentB;

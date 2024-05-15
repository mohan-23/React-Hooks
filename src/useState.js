import React, { useState } from "react";
//import "./Display.css";

const UseState = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count {count}</h1>
      <button onClick={updateCount}>Click Here</button>
    </div>
  );
};

export default UseState;

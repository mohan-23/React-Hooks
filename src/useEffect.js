// This is a component life cycle method, useEffect takes two parameters
// function, dependencies and it executes ofter return statement only once,
// if dependencies is given is executes based on the value.

import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => console.log(count), [count]);

  return (
    <div style={{ textAling: "center" }}>
      <h1>Count Value {count}</h1>
      <button onClick={() => setCount(count + 1)}>Change</button>
    </div>
  );
};

export default UseEffect;

// * Help us to improve the performance of application, when we are
//   performing most expensive function
// * useMemo will not run for every re-render happens
// * It will run during the first render and when it's dependency values changes.
// * useEffect() will run after render of the component.
// * useMemo() will run during render of the component.

import React from "react";

const UseMemoHook = () => {
  const [count, setCount] = React.useState(0);
  const [number, setNumber] = React.useState(3);

  const factorial = React.useMemo(() => fact(number), [number]);

  return (
    <div>
      <center>
        Factorial: {factorial}
        <br />
        <button onClick={() => setCount(count + 1)}>Click</button>
        <br />
        <button onClick={() => setNumber(number + 1)}>Click</button>
        <br />
        Counter: {count}
      </center>
    </div>
  );
};

const fact = (num) => {
  let factorialValue = 1;
  for (var i = num; i >= 1; i--) {
    factorialValue = factorialValue * i;
  }
  console.log("This is the factorial");
  return factorialValue;
};

export default UseMemoHook;

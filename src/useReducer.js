// * REDUX:  use to store state values in redux-store.
// * useReducer:  use to store state values to local const variable.
// const [state, dispatch] = useReducer(reducer, initialState)

import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return new Error();
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <center>
        <h1>Count: {state.count}</h1>
        <br />
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </center>
    </div>
  );
};

export default UseReducer;


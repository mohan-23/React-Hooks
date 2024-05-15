// * useState: will re-render when the content change and update in UI.
// * useRef: doesn't notify you when its content changes. Mutating the (.current)
//   property doesn't cause a re-render.

import React, { useRef, useEffect } from "react";

const UseRef = () => {
  const data = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data.current.value);
  };

  useEffect(() => {
    return data.current.focus();
  });

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input ref={data} type="text" placeholder="Enter your name" />
          <br />
          <input type="submit" />
        </form>
      </center>
    </div>
  );
};

export default UseRef;

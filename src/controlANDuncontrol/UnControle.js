import React from "react";

const UnControle = () => {
  const userRef = React.useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    alert(userRef.current.value);
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" ref={userRef} />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default UnControle;

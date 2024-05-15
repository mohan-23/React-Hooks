import React, { useState } from "react";

const Pallindrome = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const changeInput = (event) => {
    setInput(event.target.value);
  };

  const checkStatus = () => {
    let reversed = input.split("").reverse().join("");
    if (input === reversed) {
      setResult("Pallindrome");
    } else {
      setResult("Not a Pallindrome");
    }
  };

  return (
    <div>
      <center>
        <h3>Checking Pallindrome</h3>
        <input type="text" value={input} onChange={changeInput} />
        <br />
        <button type="button" onClick={checkStatus}>
          Check
        </button>
        <br />
        <br />
        <p>{result}</p>
      </center>
    </div>
  );
};

export default Pallindrome;

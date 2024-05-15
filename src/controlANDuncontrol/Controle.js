// * Control Component: Element data can be controlled by parent component through callbacks like onChange()
// * UnControlled Component: Element's data can be controlled by the DOM itself.

import React from "react";
import Test from "../controlANDuncontrol/Test";

const Controle = () => {
  const [name, setName] = React.useState("");

  const changeHandler = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <center>
        Name: {name}
        <br />
        <input type="text" onChange={changeHandler} />
        <br />
        <Test changeHandler={changeHandler} />
      </center>
    </div>
  );
};

export default Controle;

// * Context API is an kind of feature used to share data with multiple components.
//   without passing the data through props manually.

import React, { useContext } from "react";
import { Store } from "../ContextAPI/Context";

const ComponentA = () => {
  const [data, setData] = useContext(Store);
  return (
    <div>
      <center>
        <div
          style={{ border: "3px solid black", padding: "10px", width: "200px" }}
        >
          <h3>Component A {data}</h3>
        </div>
      </center>
    </div>
  );
};

export default ComponentA;

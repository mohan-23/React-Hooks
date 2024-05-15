import React, { useContext } from "react";
import { Store } from "../ContextAPI/Context";

const ComponentB = () => {
  const [data, setData] = useContext(Store);
  return (
    <div>
      <center>
        <div
          style={{
            border: "3px solid black",
            padding: "10px",
            width: "200px",
            marginTop: "10px",
          }}
        >
          <h3>Component B {data}</h3>
        </div>
      </center>
    </div>
  );
};

export default ComponentB;

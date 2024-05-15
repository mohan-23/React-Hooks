import React, { useContext } from "react";
import { Store } from "../ContextAPI/Context";

const Count = () => {
  const [data, setData] = useContext(Store);
  return (
    <div>
      <center>
        <h3>Count: {data.length}</h3>
      </center>
    </div>
  );
};

export default Count;

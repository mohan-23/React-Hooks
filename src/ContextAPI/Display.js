import React, { useContext, useState } from "react";
import { Store } from "../ContextAPI/Context";

const Display = () => {
  const [data, setData] = useContext(Store);
  const [name, setName] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setData([...data, { brandname: name }]);
  };

  return (
    <div
      style={{
        border: "3px solid black",
        padding: "10px",
        width: "200px",
        marginTop: "10px",
      }}
    >
      <center>
        {data.map((item) => (
          <h3>{item.brandname}</h3>
        ))}
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default Display;

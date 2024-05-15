import React, { createContext, useState } from "react";

//import ComponentA from "../ContextAPI/ComponentA";
//import ComponentB from "../ContextAPI/ComponentB";
import Count from "../ContextAPI/Count";
import Display from "../ContextAPI/Display";

export const Store = createContext();

const Context = () => {
  const [data, setData] = useState([
    {
      brandname: "Nokia",
    },
    {
      brandname: "Mi",
    },
    {
      brandname: "Samsung",
    },
  ]);
  return (
    <div>
      <Store.Provider value={[data, setData]}>
        <center>
          <Count />
          <Display />
        </center>
      </Store.Provider>
    </div>
  );
};

export default Context;

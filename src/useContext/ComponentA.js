// * It is used to send props one component ot onether component.
// * Context provides a way to pass data through the component tree without having
//   to pass props down manually at every level.


import React from "react";
import ComponentC from "../useContext/ComponentC";

export const UserContext = React.createContext();

const ComponentA = () => {
  const data = { user: "Mohan", city: "Hyderabad" };
  return (
    <div>
      <center>
        <UserContext.Provider value={data}>
          <ComponentC />
        </UserContext.Provider>
      </center>
    </div>
  );
};

export default ComponentA;



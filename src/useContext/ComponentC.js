import React from "react";
import { UserContext } from "../useContext/ComponentA";

const ComponentC = () => {
  return (
    <div>
      <center>
        <h3>This is Component C</h3>
        <UserContext.Consumer>
          {(value) => (
            <>
              <h3>{value.user}</h3>
              <h3>{value.city}</h3>
            </>
          )}
        </UserContext.Consumer>
      </center>
    </div>
  );
};

export default ComponentC;

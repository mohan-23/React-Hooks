// * Redux is an open-source JavaScript library for managing application state

// * npm install redux
// * npm install react-redux
// * npm install redux-thunk
// * npm install redux-devtools-extension

import React from "react";
import { connect } from "react-redux";
import { DecAction, IncAction } from "../Redux/Actions";

const ReduxHome = ({ local_variable, IncAction, DecAction }) => {
  return (
    <div>
      <center>
        <h2>Count: {local_variable}</h2>
        <br />
        <button type="button" onClick={() => IncAction(5)}>
          Increment
        </button>
        <br />
        <button type="button" onClick={DecAction}>
          Decrement
        </button>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  local_variable: state,
});

export default connect(mapStateToProps, { IncAction, DecAction })(ReduxHome);

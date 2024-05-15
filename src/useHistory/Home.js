import React from "react";
//import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Home = () => {
  //const history = useHistory();
  //<button onClick={() => history.push("/dashboard")}>Login</button>
  const history = useNavigate();
  return (
    <div>
      <center>
        <h1>This is a Home Section</h1>
        <button onClick={() => history("/dashboard")}>Login</button>
      </center>
    </div>
  );
};

export default Home;

import React from "react";

const LocalStorage = () => {
  //  localStorage.setItem("name", "Mohan");
  //  sessionStorage.setItem("name", "Madhan");
  return (
    <div>
      <center>
        <h1>Home Page</h1>
        <h3>LocalStorage: {localStorage.getItem("name")}</h3>
        <h3>SessionStorage: {sessionStorage.getItem("name")}</h3>
      </center>
    </div>
  );
};

export default LocalStorage;

import React, { useState } from "react";

const OnChange = () => {
  const [user, setUser] = useState("");

  const changeUser = (event) => {
    setUser(event.target.value);
  };

  return (
    <div>
      <h1>{user}</h1>
      <input type="text" value={user} name="user" onChange={changeUser} />
    </div>
  );
};

export default OnChange;

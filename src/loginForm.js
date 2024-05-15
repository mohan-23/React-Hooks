import React, { useState } from "react";

const LoginForm = () => {
  const [data, setUser] = useState({ user: "", password: "" });

  const { user, password } = data;
  const onChange = (event) => {
    setUser({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
    //axios.post('url', data)
  };

  const className = {
    border: "2px solid black",
    padding: "20px",
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className={className}>
        <form onSubmit={submitHandler}>
          <label htmlFor="user">Enter User Name</label>
          <br />

          <input
            type="text"
            value={user}
            name="user"
            id="user"
            onChange={onChange}
            placeholder="Username"
          />
          <br />
          <br />
          <label htmlFor="password">Enter User Password</label>
          <br />
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            onChange={onChange}
            placeholder="Password"
          />
          <br />
          <br />
          <input type="submit" name="submit" />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

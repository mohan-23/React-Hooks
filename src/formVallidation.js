import React, { useState } from "react";

const FormVallidation = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = data;

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (username.length <= 5) {
      alert("Username must be at least 5 characters");
    } else if (password !== confirmPassword) {
      alert("Passwords are not matched");
    } else {
      console.log(data);
    }
  };
  return (
    <div>
      <center>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={changeHandler}
          />
          <br />
          {password !== confirmPassword ? (
            <p style={{ color: "red" }}>Passwords are not matched</p>
          ) : null}
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default FormVallidation;

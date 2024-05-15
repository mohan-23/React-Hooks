import React, { useState } from "react";

const SingnUpForm = () => {
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
    if (password === confirmPassword) {
      console.log(data);
    } else {
      console.log("Passwrods are not matching");
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
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default SingnUpForm;

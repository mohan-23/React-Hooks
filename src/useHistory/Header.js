import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", marginLeft: "15px" }}>
          <li>Home</li>
        </Link>
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", marginLeft: "15px" }}
        >
          <li>Dashboard</li>
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: "none", marginLeft: "15px" }}
        >
          <li>About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;

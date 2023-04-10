import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/login.css";

function Login() {
  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Image not loading"
        />
      </NavLink>
      <div className="login-container">
        <h1>Sign In</h1>
      </div>
    </div>
  );
}

export default Login;

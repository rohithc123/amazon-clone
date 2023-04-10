import React from "react";
import { NavLink } from "react-route-dom";
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
        Login page
      </NavLink>
    </div>
  );
}

export default Login;

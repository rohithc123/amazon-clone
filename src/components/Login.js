import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [email,setEmail] = useState(' ');
  const [password,setPassword] = useState(' ');

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

        <form>
          <h5>E-mail</h5>
          <input type="text" name="" id="" />

          <h5>Password</h5>
          <input type="password" name="" id="" />

          <button className='login-signin-button'>Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon's Clone Conditions of Use & Sale.
          Please see our Privact Notice,our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button className='login-register-button'>Create your amazon Account</button>
      </div>
    </div>
  );
}

export default Login;

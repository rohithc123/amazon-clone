// import logo from './logo.svg';
import React, { useEffect } from "react";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./Stateprovider";
import {auth} from "./Firebase"

function App() {
  const [basket, dispatch] = useStateValue();

  useEffect(() => {
    //will run only once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is>>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET-USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET-USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

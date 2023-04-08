// import logo from './logo.svg';
import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
          <Route path="/checkout" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

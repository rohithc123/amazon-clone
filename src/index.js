import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Reducer,{initialState } from "./components/Reducer";
import StateProvider from "./components/Stateprovider"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* intial state-how data layer looks initially,reducer- how we manipulate the data*/}
    <StateProvider initialState={initialState} Reducer={Reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

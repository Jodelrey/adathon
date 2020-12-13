import React from "react";
import ReactDOM from "react-dom";
import { AsideProvider } from "./context/AsideContext";
import { UserProvider } from "./context/UserContext";

import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AsideProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AsideProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import ContextProvider from "./ContextProvider";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

function Index() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

ReactDOM.render(<Index />, rootElement);

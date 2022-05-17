import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </StrictMode>
);

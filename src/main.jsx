import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StytchProvider } from "@stytch/react";
import { StytchUIClient } from "@stytch/vanilla-js";

const stytch = new StytchUIClient("YOUR-PUBLIC-TOKEN");

// Wrap your App in the StytchProvider
// ReactDOM.render(
//   <StytchProvider stytch={stytch}>
//     <App />
//   </StytchProvider>,
//   document.getElementById('root'),
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <StytchProvider stytch={stytch}>
    <App />
  </StytchProvider>
);

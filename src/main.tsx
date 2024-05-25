import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import App from "./App"
import { store } from "./app/store"
import { KINDE_DOMAIN, KINDE_CLIENT_ID } from "./env-variables"
import "./index.css"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <KindeProvider
          clientId={KINDE_CLIENT_ID}
          domain={KINDE_DOMAIN}
          logoutUri={window.location.origin}
          redirectUri={window.location.origin}
        >
          <App />
        </KindeProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

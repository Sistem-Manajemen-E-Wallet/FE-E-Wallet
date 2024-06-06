import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "./components/ui/toaster";
import "./index.css";
import { TokenProvider } from "./utils/contexts/token";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TokenProvider>
      <Provider>
        <App />
      </Provider>
    </TokenProvider>
    <Toaster />
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import "./assets/styles/main.css";

const redirect = sessionStorage.getItem("spa-redirect");
if (redirect) {
  sessionStorage.removeItem("spa-redirect");
  window.history.replaceState(null, "", redirect);
}

const container = document.getElementById("root");
if (!container) throw new Error("Missing #root element in index.html");

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

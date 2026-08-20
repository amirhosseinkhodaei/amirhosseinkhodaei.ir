import React from "react";
import { createRoot } from "react-dom/client";

// router
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";

// styles
import "./assets/styles/utils/fontawesome.min.css";
import "./assets/styles/main.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);

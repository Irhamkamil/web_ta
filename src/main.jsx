import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

// import another css
import "./index.css";
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/mint.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
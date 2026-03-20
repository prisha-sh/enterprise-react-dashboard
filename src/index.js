import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { TeamProvider } from "./contexts/TeamContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SnackbarProvider>
          <TeamProvider>
            <App />
          </TeamProvider>
        </SnackbarProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

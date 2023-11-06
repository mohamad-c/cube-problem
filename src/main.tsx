import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.tsx";
import { InputErrorProvider } from "./context/InputErrorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <InputErrorProvider>
        <App />
      </InputErrorProvider>
    </UserProvider>
  </React.StrictMode>
);

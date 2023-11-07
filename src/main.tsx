import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { InputErrorProvider } from "./context/InputErrorContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InputErrorProvider>
      <UserProvider>
        <Toaster />
        <App />
      </UserProvider>
    </InputErrorProvider>
  </React.StrictMode>
);

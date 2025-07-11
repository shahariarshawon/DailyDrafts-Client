import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Routes/MainRoute.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);

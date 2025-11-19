import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASENAME || "/";

createRoot(document.getElementById("root")).render(
    <BrowserRouter basename={BASE_URL}>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
);

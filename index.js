import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(process.env.REACT_APP_GOOGLE_FORM_URL);
console.log(process.env.REACT_APP_MODE);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

import { Router } from "./Router";
import React from "react";

import "./App.css";
import { Loader } from "./components/loader/Loader";


function App() {
    return (
        <>
            <Loader sec={1.4}></Loader>
            <Router></Router>
        </>
    );
}

export default App;

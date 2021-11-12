import { useState, useEffect } from "react";
import firebase from './firebase-config';
import { GlobalStyle } from './components/index';
import { Routes } from "./routes";


function App() {
    document.title = "GroupGator"
    return (
        <>
            <GlobalStyle />
            <Routes />
        </>
    );
}


export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { auth } from "./firebase/firebase";
import SignIn from './SignIn';
import './index.css';

auth().onAuthStateChanged(user => {
    if (!user) {
        ReactDOM.render(<SignIn></SignIn>, document.getElementById("root"))
    }
    else {
        ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
    }
})
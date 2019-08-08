import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { auth } from "./firebase/firebase";

import Login from './Login';
import './index.css';

auth().onAuthStateChanged(user => {
    if (!user) {
        ReactDOM.render(<Login></Login>, document.getElementById("root"))
    }
    else {
        ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
    }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

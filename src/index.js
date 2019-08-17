import React from 'react';
import ReactDOM from 'react-dom';
import { auth } from "./firebase/firebase";
import SignIn from './SignIn';
import { UserContextProvider } from "./UserContextProvider";
import './index.css';

auth().onAuthStateChanged(user => {
    if (!user) {
        ReactDOM.render(<SignIn></SignIn>, document.getElementById("root"))
    }
    else {
        ReactDOM.render(<UserContextProvider user={user}></UserContextProvider>, document.getElementById('root'));
    }
})
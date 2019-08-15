import React from "react";
import App from './App';
import { BrowserRouter } from "react-router-dom";

let UserContext = React.createContext({});

function UserContextProvider({ user }) {
    return (
        <UserContext.Provider value={user}><BrowserRouter><App /></BrowserRouter></UserContext.Provider>
    )
}

export { UserContextProvider, UserContext };
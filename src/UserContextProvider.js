import React from "react";
import App from './App';
import { BrowserRouter } from "react-router-dom";

let UserContext = React.createContext({});

function UserContextProvider({ user }) {
    return (
        <BrowserRouter><UserContext.Provider value={user}><App /></UserContext.Provider></BrowserRouter>
    )
}

export { UserContextProvider, UserContext };
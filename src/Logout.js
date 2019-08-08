import React, { useState, useEffect } from "react";
import { auth } from "./firebase/firebase";
import { Redirect } from "react-router-dom";

function Logout() {
    let [succesful, setSuccesful] = useState(false);

    useEffect(() => {
        auth().signOut().then(() => {
            setSuccesful(true);
        })
    }, []);

    if (succesful) {
        return <Redirect to="/" />
    }
    else {
        return "Logging out..";
    }
}

export default Logout;
import React, { useState, useEffect } from "react";
import { auth } from "./firebase/firebase";
import { Redirect } from "react-router-dom";

function SignOut() {
    let [succesful, setSuccessful] = useState(false);

    useEffect(() => {
        auth().signOut().then(() => {
            setSuccessful(true);
        })
    }, []);

    if (succesful) {
        return <Redirect to="/" />
    }
    else {
        return "Signing you out..";
    }
}

export default SignOut;
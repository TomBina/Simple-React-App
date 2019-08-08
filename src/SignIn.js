import React, { useState } from "react";
import FieldValidator from "./FieldValidator";
import { useForm } from "./hooks/useForm";
import { auth } from "./firebase/firebase";
import './SignIn.css';

function SignIn() {
    let [credentials, form] = useForm({
        email: "",
        password: ""
    });
    let [register, setRegister] = useState(false);
    let [errorMessage, setErrorMessage] = useState("");

    async function handleSignIn(e) {
        e.preventDefault();

        try {
            await auth().signInWithEmailAndPassword(credentials.email, credentials.password);
        }
        catch ({ message }) {
            setErrorMessage(message);
        }
    }

    async function handleRegister(e) {
        e.preventDefault();

        try {
            await auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
        }
        catch ({ message }) {
            setErrorMessage(message);
        }
    }

    if (!register) {
        return (
            <>
                <header className="signin-header"></header>
                <form onSubmit={handleSignIn}>
                    <h1>Login</h1>
                    {errorMessage}
                    <FieldValidator required={true} email={true} value={credentials.email} name="email" form={form}>
                        <input type="text" />
                    </FieldValidator>
                    <FieldValidator required={true} value={credentials.password} type="password" name="password" form={form}>
                        <input type="text" />
                    </FieldValidator>
                    <button type="submit" disabled={!form.isValid()}>login</button>
                    <h2>No account yet?</h2>
                    <p>
                        Register an account.
                    </p>
                    <button type="button" onClick={() => { setRegister(true); }}>register</button>
                </form>
            </>
        );
    }
    else {
        return (
            <>
                <header className="signin-header"></header>
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    {errorMessage}
                    <FieldValidator required={true} email={true} value={credentials.email} name="email" form={form}>
                        <input type="text" />
                    </FieldValidator>
                    <FieldValidator required={true} value={credentials.password} type="password" name="password" form={form}>
                        <input type="text" />
                    </FieldValidator>
                    <button type="submit" disabled={!form.isValid()}>register</button>
                    <h2>Got already an account?</h2>
                    <p>
                        Login to proceed.
                    </p>
                    <button type="button" onClick={() => { setRegister(false); }}>login</button>
                </form>
            </>
        );
    }
}

export default SignIn;
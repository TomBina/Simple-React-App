import React from "react";
import FieldValidator from "./FieldValidator";
import { useForm } from "./hooks/useForm";

function Login() {
    let [credentials, form] = useForm({
        email: "",
        password: ""
    });

    async function onSubmit(e) {
        console.log(credentials);
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Login</h1>
            <FieldValidator required={true} email={true} value={credentials.email} name="email" form={form}>
                <input type="text" />
            </FieldValidator>
            <FieldValidator required={true} value={credentials.password} type="password" name="password" form={form}>
                <input type="text" />
            </FieldValidator>
            <button type="submit" disabled={!form.isValid()}>login</button>
        </form>
    );
}

export default Login;
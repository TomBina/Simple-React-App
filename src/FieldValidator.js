import React, { useState, useEffect } from "react";
import "./FormValidator.css";

function FieldValidator({ name, value, required, email, form, children, ...rest }) {
    let [dirty, setDirty] = useState(false);
    let child = React.Children.toArray(children)[0];
    let clonedChild = React.cloneElement(child, {
        ...rest,
        name,
        value,
        placeholder: name,
        onChange: (e) => {
            form.handleChange(e);
            setDirty(true);
        }
    });
    let { valid, errorMessage } = validate(value, required, email);

    useEffect(() => {
        if (!valid) {
            form.setInvalid(name)
        }
        else {
            form.setValid(name);
        }
    }, [form, valid, name]);


    if (!valid) {
        return (
            <>
                {clonedChild}
                {dirty && <div className="formvalidation-error">{errorMessage}</div>}
            </>
        )
    }
    else {
        return clonedChild;
    }
}

function validate(value, required, email) {
    if (required && !value) {
        return {
            valid: false,
            errorMessage: "This field is required."
        }
    }

    if (!required && !value) {
        return {
            valid: true
        }
    }

    let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email && !emailRegEx.test(value)) {
        return {
            valid: false,
            errorMessage: "You must provide a valid e-mail."
        }
    }

    return {
        valid: true
    }
}
export default FieldValidator;
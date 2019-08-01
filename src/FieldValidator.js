import React, { useState, useEffect } from "react";
import "./FormValidator.css";

function FieldValidator({ name, value, required, form, children }) {
    let [dirty, setDirty] = useState(false);
    let child = React.Children.toArray(children)[0];
    let clonedChild = React.cloneElement(child, {
        name: name,
        value: value,
        placeholder: name,
        onChange: (e) => {
            form.handleChange(e);
            setDirty(true);
        }
    });

    let invalid = required && !value;

    useEffect(() => {
        if (invalid) {
            form.setInvalid(name)
        }
        else {
            form.setValid(name);
        }
    }, [form, invalid, name]);


    if (invalid) {
        return (
            <>
                {clonedChild}
                {dirty && <div className="formvalidation-error">This field is required.</div>}
            </>
        )
    }
    else {
        return clonedChild;
    }
}

export default FieldValidator;   
import React, { useState } from "react";
import "./FormValidator.css";

function FieldValidator({name, value, required, form, children}) {
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

    if (required && !value) {
        form.setInvalid(name);

        return (
            <>
                {clonedChild}
                {dirty && <div className="formvalidation-error">This field is required.</div>}
            </>
        )
    }
    else {
        form.setValid(name);
        return clonedChild;
    }
}

export default FieldValidator;   
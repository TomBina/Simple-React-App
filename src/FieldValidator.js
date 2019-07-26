import React, { useState } from "react";
import "./FormValidator.css";

function FieldValidator(props) {
    let form = props.form;
    let [dirty, setDirty] = useState(false);
    let child = React.Children.toArray(props.children)[0];
    let clonedChild = React.cloneElement(child, {
        name: props.name,
        value: props.value,
        placeholder: props.name,
        onChange: (e) => {
            form.handleChange(e);
            setDirty(true);
        }
    });

    if (props.required && !props.value) {
        form.setInvalid(props.name);

        return (
            <>
                {clonedChild}
                {dirty && <div className="formvalidation-error">This field is required.</div>}
            </>
        )
    }
    else {
        form.setValid(props.name);
        return clonedChild;
    }
}

export default FieldValidator;   
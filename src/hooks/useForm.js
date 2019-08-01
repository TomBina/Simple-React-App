import { useState } from "react";

export function useForm(obj) {
    let [values, setValues] = useState({ ...obj });
    let [errors, setErrors] = useState([]);

    let form = {
        handleChange(e) {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        },
        setValid(name) {
            if (errors.every(e => e !== name)) {
                return;
            }
            setErrors(errors.filter(e => e !== name));
        },
        setInvalid(name) {
            if (errors.some(e => e === name)) {
                return;
            }
            setErrors([name, ...errors])
        },
        isValid() {
            return errors.length === 0;
        }
    }

    return [values, form, setValues];
}
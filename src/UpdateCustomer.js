import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "./hooks/useForm";
import { useDoc } from "./hooks/useDoc";
import FieldValidator from "./FieldValidator";

function UpdateCustomer({ match }) {
    let [customer, form, setCustomer] = useForm({
        company: "",
        address: "",
        city: ""
    });
    let [saved, setSaved] = useState(false);
    let doc = useDoc("customers/" + match.params.id, setCustomer);

    async function onSubmit(e) {
        e.preventDefault();
        await doc.update(customer);
        setSaved(true);
    }

    if (saved) {
        return <Redirect to="/customers/" />
    }

    else {
        return (
            <form onSubmit={onSubmit}>
                <FieldValidator required={true} value={customer.company} name="company" form={form}>
                    <input type="text" className="addcustomer-input" />
                </FieldValidator>
                <FieldValidator required={true} value={customer.address} name="address" form={form}>
                    <input type="text" className="addcustomer-input" />
                </FieldValidator>
                <FieldValidator required={true} value={customer.city} name="city" form={form}>
                    <input type="text" className="addcustomer-input" />
                </FieldValidator>
                <button type="submit" disabled={!form.isValid()}>update customer</button>
            </form>
        )
    }
}

export default UpdateCustomer;
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import "./AddCustomer.css";
import { useForm } from "./hooks/useForm";
import FieldValidator from "./FieldValidator";
import db from "./firebase/firebase";
import { UserContext } from "./UserContextProvider";

function AddCustomer() {
    let [customer, form] = useForm({
        company: "",
        address: "",
        city: ""
    });
    let [saved, setSaved] = useState(false);
    let userContext = useContext(UserContext);

    async function onSubmit(e) {
        e.preventDefault();
        await db.collection("customersv2").add({
            ...customer
        });

        await db.collection("log").add({
            level: "Information",
            uid: userContext.uid,
            email: userContext.email,
            message: `Added customer ${customer.company}`
        });
        
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
                <button type="submit" disabled={!form.isValid()}>add customer</button>
            </form>
        )
    }
}

export default AddCustomer;
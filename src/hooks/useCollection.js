import { useState, useEffect } from "react";
import db from "../firebase/firebase";

export function useCollection(name) {
    let [values, setValues] = useState({
        customers: [],
        done: false
    });

    useEffect(() => {
        async function getCustomers() {
            let snapshot = await db.collection(name).get();
            let customers = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setValues({
                customers,
                done: true
            });
        }

        getCustomers();
    }, [name]);

    let deleteValue = function (id) {
        db.doc(`customers/${id}`).delete();
        setValues({
            ...values,
            customers: values.customers.filter(c => c.id !== id)
        });
    }

    return [values.customers, values.done, deleteValue];
}
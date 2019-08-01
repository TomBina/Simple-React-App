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

    return [values.customers, setValues, values.done];
}
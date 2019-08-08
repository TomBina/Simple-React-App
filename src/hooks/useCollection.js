import { useState, useEffect } from "react";
import db from "../firebase/firebase";

export function useCollection(name) {
    let [values, setValues] = useState({
        data: [],
        done: false
    });

    useEffect(() => {
        async function getCustomers() {
            let snapshot = await db.collection(name).get();
            
            setValues({
                data: snapshot.docs.map(d => ({ id: d.id, ...d.data() })),
                done: true
            });
        }

        getCustomers();
    }, [name]);

    let deleteValue = function (id) {
        db.doc(`${name}/${id}`).delete();
        setValues({
            ...values,
            data: values.data.filter(c => c.id !== id)
        });
    }

    return [values.data, values.done, deleteValue];
}
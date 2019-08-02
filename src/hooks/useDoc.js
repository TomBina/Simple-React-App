import { useEffect } from "react";
import db from "../firebase/firebase";

export function useDoc(id, setValues) {
    useEffect(() => {
        async function getData() {
            let data = await db.doc(id).get();
            setValues(data.data());
        }

        getData();
    }, [id]);

    return {
        async update(newData) {
            await db.doc(id).update(newData)    
        }
    }
}
import React, { useState, useEffect, useRef } from 'react';
import CustomerCard from './CustomerCard';
import db from "./firebase/firebase";
import './Customers.css';

function Customers() {
    let searchElement = useRef();
    let [customers, setCustomers] = useState([]);
    let [query, setQuery] = useState("");
    let [message, setMessage] = useState("Loading..");
    let cards = customers.map(c => <CustomerCard
        onDeleted={handleDeleted}
        key={c.id}
        {...c}>
    </CustomerCard>)

    function handleDeleted(id) {
        setCustomers(customers.filter(c => c.id !== id));
    }

    useEffect(() => {
        searchElement.current.focus();
    }, []);

    useEffect(() => {
        async function getCustomers() {
            if (!query) {
                let snapshot = await db.collection("customers").get();
                let customers = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));

                setMessage(null);
                setCustomers(customers);
                return;
            }

            let snapshot = await db.collection("customers").get();
            let customers = snapshot.docs.map(d => ({ id: d.id, ...d.data() })).filter(c => c.company.toLowerCase().startsWith(query.toLowerCase()));

            if (customers.length === 0) {
                setMessage("No results found.");
                return;
            }

            setMessage(null);
            setCustomers(customers);
        }

        getCustomers();
    }, [query]);

    return (
        <div>
            <h1>Customers</h1>
            <input ref={searchElement} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search" className="customers-query" />
            {message ? message : cards}
        </div>
    );
}

export default Customers;
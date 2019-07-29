import React, { useState, useEffect, useRef } from 'react';
import CustomerCard from './CustomerCard';
import db from "./firebase/firebase";
import './Customers.css';

function Customers() {
    let searchElement = useRef();
    let [customers, setCustomers] = useState([]);
    let [query, setQuery] = useState("");
    let [message, setMessage] = useState("Loading..");
    let cards = customers.map((c, index) => <CustomerCard
        key={index}
        company={c.company}
        address={c.address}
        city={c.city}>
    </CustomerCard>)

    useEffect(() => {
        searchElement.current.focus();
    }, []);

    useEffect(() => {
        async function getCustomers() {
            if (!query) {
                let documents = await db.collection("customers").get();
                let customers = documents.docs.map(d => d.data());

                setMessage(null);
                setCustomers(customers);
                return;
            }

            let documents = await db.collection("customers").where("company", "==", query).get();
            let customers = documents.docs.map(d => d.data());

            if (customers.length === 0) {
                setMessage("No results found.");
                return;
            }

            setMessage(null); // dont forget bugfix
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
import React, { useState, useEffect, useRef } from 'react';
import CustomerCard from './CustomerCard';

function Customers() {
    let searchElement = useRef();
    let [customers, setCustomers] = useState([]);
    let [query, setQuery] = useState("");
    let [message, setMessage] = useState("Loading..");
    let cards = customers.map(c => <CustomerCard
        key={c.id}
        company={c.company}
        address={c.address}
        city={c.city}>
    </CustomerCard>)

    useEffect(() => {
        searchElement.current.focus();
    }, []);

    useEffect(() => {
        async function getCustomers() {
            let customers = await fetch("/customers.json").then(response => response.json());

            if (!query) {
                setMessage(null);
                setCustomers(customers);
                return;
            }

            customers = customers.filter(c => c.company.toLowerCase().startsWith(query.toLowerCase()));

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
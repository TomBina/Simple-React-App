import React, { useState, useEffect, useRef } from 'react';
import CustomerCard from './CustomerCard';
import { useCollection } from './hooks/useCollection';

function Customers() {
    let searchElement = useRef();
    let [query, setQuery] = useState("");
    let [results, setResults] = useState("Loading..");
    let [customers, done, deleteCustomer] = useCollection("customers");

    useEffect(() => {
        if (!done) {
            return;
        }

        let foundCustomers = query
            ? customers.filter(c => c.company.toLowerCase().startsWith(query.toLowerCase()))
            : customers;

        if (foundCustomers.length === 0) {
            setResults("No results found.");
            return;
        }

        setResults(foundCustomers.map(c => <CustomerCard
            onDelete={deleteCustomer}
            key={c.id}
            {...c}>
        </CustomerCard>));
    }, [customers, query])

    useEffect(() => {
        searchElement.current.focus();
    }, []);

    return (
        <div>
            <h1>Customers</h1>
            <input ref={searchElement} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search" className="customers-query" />
            {results}
        </div>
    );
}

export default Customers;
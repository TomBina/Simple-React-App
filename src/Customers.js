import React, { useState, useEffect } from 'react';
import CustomerCard from './CustomerCard';

function Customers() {
    let [customers, setCustomers] = useState([]);
    let cards = customers.map(c => <CustomerCard
        key={c.id}
        company={c.company}
        address={c.address}
        city={c.city}>
    </CustomerCard>)

    useEffect(() => {
        async function getCustomers() {
            let customers = await fetch("/customers.json").then(response => response.json());
            setCustomers(customers);
        }

        getCustomers();
    }, []);
    
    return (
        <div>
            <h1>Customers</h1>
            {cards.length > 0 ? cards : "loading.."}
        </div>
    );
}

export default Customers;
import React from 'react';
import CustomerCard from './CustomerCard';

function Customers() {
    return (
        <div>
            <h1>Customers</h1>
            <CustomerCard 
                company="Company ltd." 
                address="177 Arnold Ave." 
                city="Waxhaw, NC 28173">
            </CustomerCard>
        </div>
    )
}

export default Customers;
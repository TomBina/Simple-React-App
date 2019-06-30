import React from "react";
import './CustomerCard.css';

function CustomerCard({ company, address, city }) {
    return (
        <div class="card">
            <div class="card-image">
                <div class="icon-wrapper">
                    <i class="icon">people</i>
                </div>
            </div>
            <div class="card-body">
                <div class="text-wrapper">
                    <div class="text">
                        <h1>{company}</h1>
                        <p>{address}</p>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard;
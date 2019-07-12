import React from "react";
import './CustomerCard.css';

function CustomerCard({ company, address, city }) {
    return (
        <div className="card">
            <div className="card-image">
                <div className="icon-wrapper">
                    <i className="icon">people</i>
                </div>
            </div>
            <div className="card-body">
                <div className="text-wrapper">
                    <div className="text">
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
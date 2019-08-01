import React from "react";
import './CustomerCard.css';
import { Link } from "react-router-dom";
import db from "./firebase/firebase";

function CustomerCard({ id, company, address, city, onDeleted }) {
    function handleDelete() {
        // eslint-disable-next-line no-restricted-globals
        if (!confirm("are you sure?")) {
            return;
        }

        db.doc(`customers/${id}`).delete();
        onDeleted(id);
    }
    
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
                    <div className="card-actions">
                        <Link to={`/updatecustomer/${id}`}>
                            <i className="icon">edit</i>
                        </Link>
                        <i className="icon" onClick={handleDelete}>delete</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerCard;
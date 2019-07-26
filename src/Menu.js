import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

function Menu() {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/customers/">Customers</Link>
                </li>
                <li>
                    <Link to="/addcustomer/">Add customer</Link>
                </li>
            </ul>

        </header>
    )
}

export default Menu;
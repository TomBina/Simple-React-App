import React from 'react';
import CustomerCard from './CustomerCard';

class Customers extends React.Component {
    constructor() {
        super();

        this.state = {
            customers: []
        };
    }

    render() {
        let cards = this.state.customers.map(c => <CustomerCard
            key={c.id}
            company={c.company}
            address={c.address}
            city={c.city}>
        </CustomerCard>)

        return (
            <div>
                <h1>Customers</h1>
                {cards.length > 0 ? cards : "loading.."}
            </div>
        )
    }

    async componentDidMount() {
        let customers = await fetch("/customers.json").then(response => response.json());

        this.setState({
            customers: customers
        });
    }

    componentWillUnmount() {
        console.log("Component will be removed.");
    }
}

export default Customers;
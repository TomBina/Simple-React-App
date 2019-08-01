import React from 'react';
import Menu from "./Menu";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Customers from "./Customers";
import NotFound from "./NotFound";
import AddCustomer from './AddCustomer';
import UpdateCustomer from "./UpdateCustomer";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customers/" component={Customers} />
        <Route path="/addcustomer/" component={AddCustomer} />
        <Route path="/updatecustomer/:id" component={UpdateCustomer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
import React from 'react';
import Menu from "./Menu";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Customers from "./Customers";
import NotFound from "./NotFound";
import AddCustomer from './AddCustomer';

function App() {
  return (
    <div>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customers/" component={Customers} />
        <Route path="/addcustomer/" component={AddCustomer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
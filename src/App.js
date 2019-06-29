import React from 'react';
import Menu from "./Menu";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Customers from "./Customers";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customers/" component={Customers} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
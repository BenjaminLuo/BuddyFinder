import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Home';
import history from './history';

import Statistics from '../Statistics';
import Discussion from '../Discussion';
import Mactching from '../Matching';
import SignIn from '../SignIn';
import Landing from '../Landing';

export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (

    <Router history={history}>
      <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/Statistics" exact component={Statistics} />
      <Route path="/Discussion" exact component={Discussion} /> 
      <Route path="/Matching" exact component={Mactching} />     
      <Route path="/SignIn" exact component={SignIn} />
      <Route path="/" exact component={Landing} />

      </Switch>
    </Router>
  );
}
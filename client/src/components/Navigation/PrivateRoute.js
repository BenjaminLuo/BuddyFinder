import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from '../Home';
import history from './history';
import Calendar from '../Calendar';
import Statistics from '../Statistics';
import Discussion from '../Discussion';
import Mactching from '../Matching';
import Landing from '../Landing';
import Contact from '../Contact';
import Settings from '../Settings';

export default function PrivateRoute({
  //authenticated,
  //...rest
}) {
  return (

    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/Calendar" exact component={Calendar} />
        <Route path="/Statistics" exact component={Statistics} />
        <Route path="/Discussion" exact component={Discussion} />
        <Route path="/Matching" exact component={Mactching} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Settings" exact component={Settings} />
      </Switch>
    </Router>
  );
}
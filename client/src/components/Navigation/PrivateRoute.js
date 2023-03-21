import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import Calendar from '../Calendar';
import Statistics from '../Statistics';
import Discussion from '../Discussion';
import Mactching from '../Matching';
import Landing from '../Landing';
import Contact from '../Contact';
import Settings from '../Settings';
import FAQ from '../FAQ';
import Search from '../Search';
import Profile from '../Profile';
import QA from '../QA';

// eslint-disable-next-line
export default function PrivateRoute() {
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
        <Route path="/FAQ" exact component={FAQ} />
        <Route path="/Search" exact component={Search} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/QA" exact component={QA} />
      </Switch>
    </Router>
  );
}
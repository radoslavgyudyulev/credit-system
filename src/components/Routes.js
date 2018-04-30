import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Credit from './Credit'
import BigCredit from './BigCredit'


const Routes = () => (
    <div>
      <Switch>
        <Route path="/credit" component={Credit} />
        <Route path="/bigcredit" component={BigCredit} />
      </Switch>
    </div>
);


export default Routes;
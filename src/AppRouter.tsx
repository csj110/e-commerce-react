import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>home page</div>} />
        <Route exact path="*" render={() => <div>other page</div>} />
      </Switch>
    </Router>
  );
};

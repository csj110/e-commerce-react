import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Card, Elevation } from "@blueprintjs/core";
import { NavComponent } from "./components/Nav.component";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { AuthPage, AuthType } from "./pages/Auth.page";

const App: React.FC = () => {
  useEffect(() => {
    axios.get("http://localhost:4000/api").then(res => console.log(res));
  }, []);

  return (
    <div>
      <Router>
        <NavComponent />
        <div className="container">
          <Card interactive={true} elevation={Elevation.TWO}>
            <Switch>
              <Route exact path="/" render={() => <div>home page</div>} />
              <Route
                exact
                path="/login"
                render={() => <AuthPage authType={AuthType.login} />}
              />
              <Route
                exact
                path="/register"
                render={() => <AuthPage authType={AuthType.register} />}
              />
              <Route exact path="*" render={() => <div>other page</div>} />
            </Switch>
          </Card>
        </div>
      </Router>
    </div>
  );
};

export default App;

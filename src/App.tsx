import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { AppRouter } from "./AppRouter";
import { Spinner, Intent, Card, Elevation } from "@blueprintjs/core";

const App: React.FC = () => {
  useEffect(() => {
    axios.get("http://localhost:4000/api").then(res => console.log(res));
  }, []);

  return (
    <div className="container">
      <Spinner intent={Intent.PRIMARY} />
      <Card interactive={true} elevation={Elevation.TWO}>
        <AppRouter />
      </Card>
    </div>
  );
};

export default App;

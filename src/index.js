import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FullTruck from "./FullTruck";
import LastMile from "./LastMile";
import Partner from "./Partner";
import About from "./About";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Display = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/service/Fulltruck">
          <FullTruck />
        </Route>
        <Route exact path="/service/LastMile">
          <LastMile />
        </Route>
        <Route exact path="/partner">
          <Partner />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Display />, document.getElementById("root"));

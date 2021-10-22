import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FullTruck from "./FullTruck";
import LastMile from "./LastMile";
import Partner from "./Partner";
import About from "./About";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Display = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/Fulltruck">
            <FullTruck />
          </Route>
          <Route exact path="/LastMile">
            <LastMile />
          </Route>
          <Route exact path="/partner">
            <Partner />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};

ReactDOM.render(<Display />, document.getElementById("root"));

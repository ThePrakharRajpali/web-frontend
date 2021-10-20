import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import Login_OTP from "./Login_OTP";
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
		<Route exact path="/login">
          <Login />
        </Route>
		<Route exact path="/login_otp">
          <Login_OTP />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Display />, document.getElementById("root"));

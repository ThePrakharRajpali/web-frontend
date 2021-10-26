import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import App from "./components/Home/App";
import Login from "./components/Login/Login";
import Login_OTP from "./components/Login/Login_OTP";
import FullTruck from "./components/Service/FullTruck/FullTruck";
import LastMile from "./components/Service/LastMile/LastMile";
import Partner from "./components/Partner/Partner";
import About from "./components/About/About";
import CotrolPanel from "./components/Dashboard/Control_Panel";
import MyProfile from "./components/Dashboard/My_Profile_Dashboard";
import UserProfile from "./components/Dashboard/User_Profile_Dashboard";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Display = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <App />
            <Footer />
          </Route>

          <Route exact path="/FullTruck">
            <Navbar />
            <FullTruck />
            <Footer />
          </Route>

          <Route exact path="/LastMile">
            <Navbar />
            <LastMile />
            <Footer />
          </Route>

          <Route exact path="/partner">
            <Navbar />
            <Partner />
            <Footer />
          </Route>

          <Route exact path="/about">
            <Navbar />
            <About />
            <Footer />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/login_otp">
            <Login_OTP />
          </Route>

          <Route exact path="/Dashboard_MyProfile">
            <CotrolPanel />
            <MyProfile />
          </Route>
          <Route exact path="/Dashboard_UserProfile">
            <CotrolPanel />
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

ReactDOM.render(<Display />, document.getElementById("root"));

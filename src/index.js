import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import App from "./components/Home/App";
import Login from "./components/Login/Login";
import Login_OTP from "./components/Login/Login_OTP";
import FullTruck from "./components/Service/FullTruck/FullTruck";
import LastMile from "./components/Service/LastMile/LastMile";
import Partner from "./components/Partner/Partner";
import About from "./components/About/About";
import ControlPanel from "./components/Dashboard/ControlPanel/Control_Panel";
import MyProfile from "./components/Dashboard/MyProfile";
import Attendance from "./components/Dashboard/Attendance";
import LiveLocation from "./components/Dashboard/LiveLocation";
import UserProfile_Customer from "./components/Dashboard/UserProfile/UserProfile_Customer";
import UserProfile_Manager from "./components/Dashboard/UserProfile/UserProfile_Manager";
import UserProfile_Driver from "./components/Dashboard/UserProfile/UserProfile_Driver";
import UserProfile_DeliveryBoy from "./components/Dashboard/UserProfile/UserProfile_DeliveryBoy";
import UserRegistration from "./components/Dashboard/UserRegistration";
import SuperUserRegistration from "./components/Dashboard/SuperUserRegistration";
import VehicleRegistration from "./components/Dashboard/VehicleRegistration";
import ServiceRequests_CreateNew from "./components/Dashboard/ServiceRequests/New";
import ServiceRequests_All from "./components/Dashboard/ServiceRequests/All";
import ServiceRequests_Pending from "./components/Dashboard/ServiceRequests/Pending";
import ServiceRequests_Active from "./components/Dashboard/ServiceRequests/Active";
import ServiceRequests_Completed from "./components/Dashboard/ServiceRequests/Completed";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Request as ServiceRequest } from "./components/Dashboard/ServiceRequests/Request";
import "./index.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <ControlPanel />
            <MyProfile />
          </Route>
          <Route exact path="/Dashboard_Attendance">
            <ControlPanel />
            <Attendance />
          </Route>
          <Route exact path="/Dashboard_LiveLocation">
            <ControlPanel />
            <LiveLocation />
          </Route>
          <Route exact path="/Dashboard_UserProfile_Customer">
            <ControlPanel />
            <UserProfile_Customer />
          </Route>
          <Route exact path="/Dashboard_UserProfile_Manager">
            <ControlPanel />
            <UserProfile_Manager />
          </Route>
          <Route exact path="/Dashboard_UserProfile_Driver">
            <ControlPanel />
            <UserProfile_Driver />
          </Route>
          <Route exact path="/Dashboard_UserProfile_DeliveryBoy">
            <ControlPanel />
            <UserProfile_DeliveryBoy />
          </Route>
          <Route exact path="/Dashboard_UserRegistration">
            <ControlPanel />
            <UserRegistration />
          </Route>
          <Route exact path="/Dashboard_SuperUserRegistration">
            <ControlPanel />
            <SuperUserRegistration />
          </Route>
          <Route exact path="/Dashboard_VehicleRegistration">
            <ControlPanel />
            <VehicleRegistration />
          </Route>
          <Route exact path="/Dashboard/Requests/All">
            <ControlPanel />
            <ServiceRequests_All />
          </Route>

          <Route exact path="/Dashboard_ServiceRequests_CreateNew">
            <ControlPanel />
            <ServiceRequests_CreateNew />
          </Route>
          <Route exact path="/Dashboard_ServiceRequests_Pending">
            <ControlPanel />
            <ServiceRequests_Pending />
          </Route>
          <Route exact path="/Dashboard_ServiceRequests_Active">
            <ControlPanel />
            <ServiceRequests_Active />
          </Route>
          <Route exact path="/Dashboard_ServiceRequests_Completed">
            <ControlPanel />
            <ServiceRequests_Completed />
          </Route>
          <Route path="/Dashboard/Requests/id/:id">
            <ControlPanel />
            <ServiceRequest />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

ReactDOM.render(<Display />, document.getElementById("root"));

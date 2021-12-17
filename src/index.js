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
import Diesel from "./components/Dashboard/Diesel";
import LiveLocation from "./components/Dashboard/LiveLocation";

import ServiceRequests_CreateNew from "./components/Dashboard/ServiceRequests/New";
import ServiceRequests_All from "./components/Dashboard/ServiceRequests/All";
import ServiceRequests_Pending from "./components/Dashboard/ServiceRequests/Pending";
import ServiceRequests_Active from "./components/Dashboard/ServiceRequests/Active";
import ServiceRequests_Completed from "./components/Dashboard/ServiceRequests/Completed";

import Profile_Customer from "./components/Dashboard/ViewProfile/Profile_Customer";
import Profile_Manager from "./components/Dashboard/ViewProfile/Profile_Manager";
import Profile_Driver from "./components/Dashboard/ViewProfile/Profile_Driver";
import Profile_DeliveryBoy from "./components/Dashboard/ViewProfile/Profile_DeliveryBoy";
import Profile_Vehicle from "./components/Dashboard/ViewProfile/Profile_Vehicle";
import UserRegistration from "./components/Dashboard/Registration/UserRegistration";
import SuperUserRegistration from "./components/Dashboard/Registration/SuperUserRegistration";
import VehicleRegistration from "./components/Dashboard/Registration/VehicleRegistration";

import { General as GeneralFormResponse } from "./components/Dashboard/FormResponse/General";
import { Vendor as VendorFormResponse } from "./components/Dashboard/FormResponse/Vendor";
import { GeneralSingle as SingleGeneralFormResponse } from "./components/Dashboard/FormResponse/GeneralSingle";

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
          <Route exact path="/loginOtpVerification">
            <Login_OTP />
          </Route>

          <Route exact path="/Dashboard/Requests/All">
            <ControlPanel />
            <ServiceRequests_All />
          </Route>

          <Route exact path="/Dashboard/Requests/New">
            <ControlPanel />
            <ServiceRequests_CreateNew />
          </Route>
          <Route exact path="/Dashboard/Requests/Pending">
            <ControlPanel />
            <ServiceRequests_Pending />
          </Route>
          <Route exact path="/Dashboard/Requests/Active">
            <ControlPanel />
            <ServiceRequests_Active />
          </Route>
          <Route exact path="/Dashboard/Requests/Completed">
            <ControlPanel />
            <ServiceRequests_Completed />
          </Route>
          <Route path="/Dashboard/Requests/id/:id">
            <ControlPanel />
            <ServiceRequest />
          </Route>

          <Route exact path="/Dashboard/MyProfile">
            <ControlPanel />
            <MyProfile />
          </Route>
          <Route exact path="/Dashboard/Attendance">
            <ControlPanel />
            <Attendance />
          </Route>
          <Route exact path="/Dashboard/Diesel">
            <ControlPanel />
            <Diesel />
          </Route>
          <Route exact path="/Dashboard/LiveLocation">
            <ControlPanel />
            <LiveLocation />
          </Route>
          <Route exact path="/Dashboard/Profile/Customer">
            <ControlPanel />
            <Profile_Customer />
          </Route>
          <Route exact path="/Dashboard/Profile/Manager">
            <ControlPanel />
            <Profile_Manager />
          </Route>
          <Route exact path="/Dashboard/Profile/Driver">
            <ControlPanel />
            <Profile_Driver />
          </Route>
          <Route exact path="/Dashboard/Profile/DeliveryBoy">
            <ControlPanel />
            <Profile_DeliveryBoy />
          </Route>
          <Route exact path="/Dashboard/Profile/Vehicle">
            <ControlPanel />
            <Profile_Vehicle />
          </Route>
          <Route exact path="/Dashboard/UserRegistration">
            <ControlPanel />
            <UserRegistration />
          </Route>
          <Route exact path="/Dashboard/SuperUserRegistration">
            <ControlPanel />
            <SuperUserRegistration />
          </Route>
          <Route exact path="/Dashboard/VehicleRegistration">
            <ControlPanel />
            <VehicleRegistration />
          </Route>

          <Route exact path="/Dashboard/Form/General">
            <ControlPanel />
            <GeneralFormResponse />
          </Route>

          <Route path="/Dashboard/Form/General/:id">
            <ControlPanel />
            <SingleGeneralFormResponse />
          </Route>

          <Route exact path="/Dashboard/Form/Vendor">
            <ControlPanel />
            <VendorFormResponse />
          </Route>

          <Route exact path="/Dashboard">
            <ControlPanel />
            <MyProfile />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

ReactDOM.render(<Display />, document.getElementById("root"));

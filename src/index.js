import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import App from "./components/Home/App";
import Login from "./components/Login/Login";
import FullTruck from "./components/Service/FullTruck/FullTruck";
import LastMile from "./components/Service/LastMile/LastMile";
import Partner from "./components/Partner/Partner";
import About from "./components/About/About";
import ControlPanel from "./components/Dashboard/ControlPanel/Control_Panel";
import MyProfile from "./components/Dashboard/MyProfile";
import Attendance from "./components/Dashboard/Attendance";
import Diesel from "./components/Dashboard/Diesel";
import LiveLocation from "./components/Dashboard/LiveLocation";

import ServiceRequestsCreateNew from "./components/Dashboard/ServiceRequests/New";
import ServiceRequestsAll from "./components/Dashboard/ServiceRequests/All";
import ServiceRequestsPending from "./components/Dashboard/ServiceRequests/Pending";
import ServiceRequestsActive from "./components/Dashboard/ServiceRequests/Active";
import ServiceRequestsCompleted from "./components/Dashboard/ServiceRequests/Completed";

import ProfileCustomer from "./components/Dashboard/ViewProfile/Profile_Customer";
import ProfileManager from "./components/Dashboard/ViewProfile/Profile_Manager";
import ProfileDriver from "./components/Dashboard/ViewProfile/Profile_Driver";
import ProfileDeliveryBoy from "./components/Dashboard/ViewProfile/Profile_DeliveryBoy";
import ProfileVehicle from "./components/Dashboard/ViewProfile/Profile_Vehicle";
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
          

          <Route exact path="/Dashboard/Requests/All">
            <ControlPanel />
            <ServiceRequestsAll />
          </Route>

          <Route exact path="/Dashboard/Requests/New">
            <ControlPanel />
            <ServiceRequestsCreateNew />
          </Route>
          <Route exact path="/Dashboard/Requests/Pending">
            <ControlPanel />
            <ServiceRequestsPending />
          </Route>
          <Route exact path="/Dashboard/Requests/Active">
            <ControlPanel />
            <ServiceRequestsActive />
          </Route>
          <Route exact path="/Dashboard/Requests/Completed">
            <ControlPanel />
            <ServiceRequestsCompleted />
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
            <ProfileCustomer />
          </Route>
          <Route exact path="/Dashboard/Profile/Manager">
            <ControlPanel />
            <ProfileManager />
          </Route>
          <Route exact path="/Dashboard/Profile/Driver">
            <ControlPanel />
            <ProfileDriver />
          </Route>
          <Route exact path="/Dashboard/Profile/DeliveryBoy">
            <ControlPanel />
            <ProfileDeliveryBoy />
          </Route>
          <Route exact path="/Dashboard/Profile/Vehicle">
            <ControlPanel />
            <ProfileVehicle />
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

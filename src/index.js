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
import MyProfile from "./components/Dashboard/MyProfile";
import Attendance from "./components/Dashboard/Attendance";
import LiveLocation from "./components/Dashboard/LiveLocation";
import UserProfile from "./components/Dashboard/UserProfile";
import VehicleRegistration from "./components/Dashboard/VehicleRegistration";
import ServiceRequests_CreateNew from "./components/Dashboard/ServiceRequests_CreateNew";
import ServiceRequests_Pending from "./components/Dashboard/ServiceRequests_Pending";
import ServiceRequests_Active from "./components/Dashboard/ServiceRequests_Active";
import ServiceRequests_Completed from "./components/Dashboard/ServiceRequests_Completed";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
            <CotrolPanel/>
			<MyProfile />
          </Route>	
		  <Route exact path="/Dashboard_Attendance">
            <CotrolPanel/>
			<Attendance />
          </Route>	
		  <Route exact path="/Dashboard_LiveLocation">
            <CotrolPanel/>
			<LiveLocation />
          </Route>	
		  <Route exact path="/Dashboard_UserProfile">
            <CotrolPanel/>
			<UserProfile />
          </Route>	
		  <Route exact path="/Dashboard_VehicleRegistration">
            <CotrolPanel/>
			<VehicleRegistration />
          </Route>	
		  <Route exact path="/Dashboard_ServiceRequests_CreateNew">
            <CotrolPanel/>
			<ServiceRequests_CreateNew />
          </Route>	
		  <Route exact path="/Dashboard_ServiceRequests_Pending">
            <CotrolPanel/>
			<ServiceRequests_Pending />
          </Route>	
		  <Route exact path="/Dashboard_ServiceRequests_Active">
            <CotrolPanel/>
			<ServiceRequests_Active />
          </Route>	
		  <Route exact path="/Dashboard_ServiceRequests_Completed">
            <CotrolPanel/>
			<ServiceRequests_Completed />
          </Route>
			
        </Switch>
      </Router>
    </Fragment>
  );
};

ReactDOM.render(<Display />, document.getElementById("root"));

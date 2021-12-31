 import React, { Fragment } from "react";
import { useCookies } from "react-cookie";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
import { CookiesProvider, withCookies } from "react-cookie";

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
  const [cookies, setCookie] = useCookies("userCode");
 
  return (
	    <CookiesProvider> 
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
					  {cookies.userCode ? 
						  <Redirect to="/Dashboard" />
						  : <Login /> }
				  </Route>


				  <Route exact path="/Dashboard/Requests/All">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ServiceRequestsAll />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>

				  <Route exact path="/Dashboard/Requests/New">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ServiceRequestsCreateNew />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/Requests/Pending">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ServiceRequestsPending />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/Requests/Active">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ServiceRequestsActive />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/Requests/Completed">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ServiceRequestsCompleted />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route path="/Dashboard/Requests/id/:id">					
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ServiceRequest />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>

				  <Route exact path="/Dashboard/MyProfile">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<MyProfile userCode = {cookies.userCode}/>
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/Attendance">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<Attendance />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/Diesel">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<Diesel />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/LiveLocation">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<LiveLocation />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/Profile/Customer">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ProfileCustomer />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/Profile/Manager">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ProfileManager />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/Profile/Driver">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ProfileDriver />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/Profile/DeliveryBoy">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ProfileDeliveryBoy />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/Profile/Vehicle">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<ProfileVehicle />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/UserRegistration">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<UserRegistration />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/SuperUserRegistration">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<SuperUserRegistration />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				  <Route exact path="/Dashboard/VehicleRegistration">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<VehicleRegistration />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>

				  <Route exact path="/Dashboard/Form/General">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<GeneralFormResponse />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>

				  <Route path="/Dashboard/Form/General/:id">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<SingleGeneralFormResponse />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>

				  <Route exact path="/Dashboard/Form/Vendor">
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<VendorFormResponse />
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>

				  <Route exact path="/Dashboard">			  
					  {cookies.userCode ? 
						  <div>
							<ControlPanel />
							<MyProfile userCode={cookies.userCode}/>
						  </div>
						  : <Redirect to="/login" /> }
				  </Route>
				</Switch>
			  </Router>
			</Fragment>
	    </CookiesProvider>
  );
};

ReactDOM.render(<Display />, document.getElementById("root"));

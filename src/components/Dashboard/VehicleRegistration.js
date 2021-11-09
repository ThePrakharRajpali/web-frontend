import React, { useState,useRef } from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import "../../public/css/Dashboard/Dashboard.css";
import "../../public/css/Dashboard/UserRegistration.css";

class VehicleRegistration extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {value: '',myOptions:[],user:null};

    this.handleRegister = this.handleRegister.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
	
  handleRegister(event) {
	var firstName =  this.refs.firstName.value;
	var middleName = this.refs.middleName.value;
	var lastName = this.refs.lastName.value;
	var emailId = this.refs.emailId.value;
	var mobileNumber = this.refs.mobileNumber.value;
	var role = this.refs.role;
	console.log("firstName: ",firstName);
	console.log("middleName: ",middleName);
	console.log("lastName: ",lastName);
	console.log("emailId: ",emailId);
	console.log("mobileNumber: ",mobileNumber);
	console.log("role: ",role);
	const re_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const re_phoneNum = /^\d{10}$/; 
	if(!(firstName!="" && lastName!="" && emailId!="" && mobileNumber!="" && role!="")){
		alert("Please fill all required fields to register the user");
	}else if(!re_email.test(emailId)){
		alert("Please enter a valid email Id");
	}else if(!re_phoneNum.test(mobileNumber)){
		alert("Please enter a valid Mobile Number");
	}else{
		alert("User Registered Successfully");
	}
	
  }
	
  handleReset(event) {
   	var inputs = document.querySelectorAll(".Form_field_input");
	inputs.forEach((input) => {
		input.value = "";
	});
  }
	
 render() {
	 
	return (
		<div className="Dashboard">
			
			<div className="UserRegistration">
				
				<div className="UserRegistration_Title_main">Register Vehicle</div>

				<form>
									
					<div className="Form_Field_Container">
						
						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label" style={{fontSize:"1.7vw",color: "#646464",marginLeft:"2vw"}}>Vehicle Info</label>
							</div>

						</div>
						
						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Registration Number</label>
								<input required className="Form_field_input" ref="firstName" style={{width:'30vw',height:'2.6vw'}}type="text"/>
							</div>

							<div className="Form_field">
								<label className="Form_field_label">Vehicle Model</label>
								<input className="Form_field_input" ref="middleName" style={{width:'30vw',height:'2.6vw'}}type="text" />
							</div>

						</div>

						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Vehicle Type</label>
								<input required className="Form_field_input" ref="emailId" style={{width:'20vw',height:'2.6vw'}} type="email" />
							</div>

							<div className="Form_field">
								<label className="Form_field_label">Body Type</label>
								<input required className="Form_field_input" ref="mobileNumber" style={{width:'20vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Form_field">
								<label className="Form_field_label">Vehicle Make Year</label>
								<input required className="Form_field_input" ref="mobileNumber" style={{width:'20vw',height:'2.6vw'}} type="text" />
							</div>

						</div>

						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Color</label>
								<input required className="Form_field_input" ref="emailId" style={{width:'20vw',height:'2.6vw'}} type="email" />
							</div>

							<div className="Form_field">
								<label className="Form_field_label">Permit</label>
								<input required className="Form_field_input" ref="mobileNumber" style={{width:'20vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Form_field">
								<label className="Form_field_label">Regsitration Date</label>
								<input required className="Form_field_input" ref="mobileNumber" style={{width:'20vw',height:'2.6vw'}} type="text" />
							</div>

						</div>
						
						<div className="Form_Fields">
							
							<div className="Form_field">
								<label className="Form_field_label">Vehicle Insurance End Date</label>
								<input required className="Form_field_input" ref="mobileNumber" style={{width:'30vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Form_field">
								<label className="Form_field_label">FleetHunt Id</label>
								<input required className="Form_field_input" ref="mobileNumber" style={{width:'30vw',height:'2.6vw'}} type="text" />
							</div>

						</div>
						
						<hr
							style={{
								color: "#646464",
								backgroundColor: "#646464",
								height: 5,
                                marginTop:"3vw"
							}}
						/>
						
						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label" style={{fontSize:"1.7vw",color: "#646464",marginLeft:"2vw"}}>Owner Info</label>
							</div>

						</div>
						
						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Owner Name</label>
								<input required className="Form_field_input" ref="firstName" style={{width:'40vw',height:'2.6vw'}}type="text"/>
							</div>

							<div className="Form_field">
								<label className="Form_field_label">Owner Phone Number</label>
								<input className="Form_field_input" ref="middleName" style={{width:'20vw',height:'2.6vw'}}type="text" />
							</div>

						</div>

						<div className="Form_Fields">

							<div className="Form_field">
									<label className="Profile_field_label">Owner Address</label>
									<textarea className="Form_field_input" style={{width:'50.8vw',height:'7vw'}} type="textarea" />
							</div>

						</div>
						
						<hr
							style={{
								color: "#646464",
								backgroundColor: "#646464",
								height: 5,
                                marginTop:"3vw"
							}}
						/>
						
						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label" style={{fontSize:"1.7vw",color: "#646464",marginLeft:"2vw"}}>Expense Info</label>
							</div>

						</div>
						
						<div className="Form_Fields">

							<div className="Form_field">
									<label className="Profile_field_label">Daily Rent</label>
									<input className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Form_field">
									<label className="Profile_field_label">Cost Per Day</label>
									<input className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Form_field">
									<label className="Profile_field_label">Cost Per Km</label>
									<input className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} type="text" />
							</div>

						</div>
						
						<div className="Form_Fields">
							<button id="Register_Button" className="Register_Button" type="submit" title="Register" onClick={this.handleRegister.bind(this)}> Register</button>
					
							<button id="Reset_Button" className="Reset_Button" type="reset" title="Reset" onClick={this.handleReset.bind(this)}>Reset Form</button>
						</div>
						
					</div>
					
				</form>
			</div>
			
		</div>
	);
 }
};

export default VehicleRegistration;

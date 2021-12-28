import React, {  } from "react";
import axios from "axios";
import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/UserRegistration.css";

class UserRegistration extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {};

    this.handleRegister = this.handleRegister.bind(this);
  }
	
  handleRegister(event) {
	  
		const re_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const re_phoneNum = /^\d{10}$/; 
	    // const re_phoneNum = /^\+?([0-9]{2})\)?[-]?([0-9]{3})[ ]?([0-9]{3})?[-]?([0-9]{4})$/;

		var firstName =  this.refs.firstName.value;
		var middleName = this.refs.middleName.value;
		var lastName = this.refs.lastName.value;
		var emailId = this.refs.emailId.value;
		var mobileNumber = this.refs.mobileNumber.value;
		var role = this.refs.role.value;

		console.log("firstName: ",firstName);
		console.log("middleName: ",middleName);
		console.log("lastName: ",lastName);
		console.log("emailId: ",emailId);
		console.log("mobileNumber: ",mobileNumber);
		console.log("role: ",role);

		if(!(firstName!="" && emailId!="" && mobileNumber!="" && role!="")){
			alert("Please fill all required fields to register the user");
		}else if(!re_email.test(emailId)){
			alert("Please enter a valid email Id");
		}else if(!re_phoneNum.test(mobileNumber)){
			alert("Please enter a valid Mobile Number");
		}else{
			const data = JSON.stringify({firstName: firstName, middleName:middleName, lastName:lastName, emailId:emailId,contact:mobileNumber,role:role});

			const config = 
			  {
				method: "post",
				url: "https://www.naataconnection.com/api/user/register",
				headers: {
				  "Content-Type": "application/json",
				},
				data: data,
			 };

			axios(config)
			.then((res) => {
				if(res.status==200){
					alert("User Registered Successfully");
					this.handleReset(); 
				}else{
					alert("Pls Try Again!!! EmailId or Phone Number are already in use.");
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Pls Try Again. EmailId or Phone Number are already in use.")
			});
		}
	
  }
	
  handleReset() {
   	var inputs = document.querySelectorAll(".Form_field_input");
	inputs.forEach((input) => {
		input.value = "";
	});
  }
	
  render() {
	 
	return (
		<div className="Dashboard">
			
			<div className="UserRegistration">
				<div className="UserRegistration_Title_main">Register User</div>
				
					<div className="Form_Field_Container">
						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">First Name</label>
								<input required className="Form_field_input" ref="firstName" style={{width:'20vw',height:'2.6vw'}}type="text"/>
							</div>

							<div className="Form_field">
								<label className="Form_field_label">Middle Name</label>
								<input className="Form_field_input" ref="middleName" style={{width:'20vw',height:'2.6vw'}}type="text" />
							</div>

							<div className="Form_field">
								<label className="Form_field_label">Last Name</label>
								<input required className="Form_field_input" ref="lastName" style={{width:'20vw',height:'2.6vw'}}type="text" />
							</div>

						</div>

						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Email Id</label>
								<input required className="Form_field_input" ref="emailId" style={{width:'40vw',height:'2.6vw'}} type="email" />
							</div>

							<div className="Form_field">
								<label className="Form_field_label">Mobile Number</label>
								<input required className="Form_field_input" ref="mobileNumber" style={{width:'20vw',height:'2.6vw'}} type="text" />
							</div>

						</div>

						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Role</label>
								<div className="Form_field_select">
									<select required className="Form_field_input" ref="role" style={{width:'20vw',height:'fit-content',cursor:"pointer"}}>
									  <option value="customer">Customer</option>
									  <option value="delivery Boy">Delivery Boy</option>
									  <option value="driver">Driver</option>
									  <option value="manager">Manager</option>
									</select>
								</div>
							</div>

						</div>
						
						<div className="Form_Fields">
							<button id="Register_Button" className="Register_Button" title="Register" onClick={this.handleRegister}> Register</button>
					
							<button id="Reset_Button" className="Reset_Button" title="Reset" onClick={this.handleReset}>Reset Form</button>
						</div>
						
					</div>		
			</div>
			
		</div>
	);
  }
	
};

export default UserRegistration;

import React, {  } from "react";
import axios from "axios";
import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/UserRegistration.css";

class VehicleRegistration extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {value: '',myOptions:[],user:null};

    this.handleRegister = this.handleRegister.bind(this);
    // this.handleReset = this.handleReset.bind(this);
  }
	
  handleRegister(event) {
	event.preventDefault();
	const re_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const re_phoneNum = /^\d{10}$/; 
	// const re_phoneNum = /^\+?([0-9]{2})\)?[-]?([0-9]{3})[ ]?([0-9]{3})?[-]?([0-9]{4})$/;
	  
	var vehicleType=Number(this.refs.vehicleType.value);
    var vehicleMakeYear=this.refs.vehicleMakeYear.value; // Num
    var vehicleModel=this.refs.vehicleModel.value;
    var bodyType=Number(this.refs.bodyType.value);
    var registrationNumber=this.refs.registrationNumber.value;
    var color=this.refs.color.value;
    var permit=this.refs.permit.value;
    var registrationDate=this.refs.registrationDate.value;
    var ownerName=this.refs.ownerName.value;
    var ownerAddress=this.refs.ownerAddress.value;
    var ownerPhone=this.refs.ownerPhone.value;
    var insuranceEndDate=this.refs.insuranceEndDate.value;
    var dailyRent=Number(this.refs.dailyRent.value); // Num
    var costPerKM=Number(this.refs.costPerKM.value); // Num
    var costPerDay=Number(this.refs.costPerDay.value); // Num
    var fleetHuntId=this.refs.fleetHuntId.value;
	  
	console.log("vehicleType: ",vehicleType);
	console.log("vehicleMakeYear: ",vehicleMakeYear);
	console.log("vehicleModel: ",vehicleModel);
	console.log("bodyType: ",bodyType);
	console.log("registrationNumber: ",registrationNumber);
	console.log("color: ",color);
	console.log("permit: ",permit);
	console.log("registrationDate: ",registrationDate);
	console.log("ownerName: ",ownerName);
	console.log("ownerAddress: ",ownerAddress);  
	console.log("ownerPhone: ",ownerPhone);
	console.log("insuranceEndDate: ",insuranceEndDate);
	console.log("dailyRent: ",dailyRent);
	console.log("costPerKM: ",costPerKM);
	console.log("costPerDay: ",costPerDay);
	console.log("fleetHuntId: ",fleetHuntId);
	  
	if(vehicleModel=="" || vehicleMakeYear==0 || registrationNumber=="" || permit=="" || registrationDate=="" || ownerName=="" || ownerAddress=="" || ownerPhone=="" || insuranceEndDate=="" || dailyRent==0 || costPerKM==0 || costPerDay==0 || fleetHuntId=="")
	{
		alert("Pls fill all the details to regsiter the vehichle")
	}
	else
    {
		const data = JSON.stringify({vehicleType:vehicleType,
									 vehicleMakeYear:vehicleMakeYear,
									 vehicleModel:vehicleModel,
									 bodyType:bodyType,
									 registrationNumber:registrationNumber,
									 color:color,
									 permit:permit,
									 registrationDate:registrationDate,
									 ownerName:ownerName,
									 ownerAddress:ownerAddress,
									 ownerPhone:ownerPhone,
									 insuranceEndDate:insuranceEndDate,
									 dailyRent:dailyRent,
									 costPerKM:costPerKM,
									 costPerDay:costPerDay,
									 fleetHuntId:fleetHuntId});

		const config = 
		  {
			method: "post",
			url: "https://www.naataconnection.com/api/vehicle/register",
			headers: {
			  "Content-Type": "application/json",
			},
			data: data,
		 };

		axios(config)
		.then((res) => {
			if(res.status==200){
				alert("Vehicle Registered Successfully");
				this.handleReset(); 
			}else{
				alert("Pls Try Again!!!");
			}
		})
		.catch((err) => {
			console.log(err);
			alert("Pls Try Again.")
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
				
				<div className="UserRegistration_Title_main" style={{fontColor:"black", fontWeight:"600"}}>Register Vehicle</div>
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
								<input required className="Form_field_input" ref="registrationNumber" style={{width:'25vw',height:'2.6vw'}}type="text" defaultValue=""/>
							</div>

							<div className="Form_field">
								<label className="Form_field_label">Vehicle Model</label>
								<input className="Form_field_input" ref="vehicleModel" style={{width:'25vw',height:'2.6vw'}}type="text" defaultValue=""/>
							</div>
							
							<div className="Form_field">
								<label className="Form_field_label">Color&nbsp;&nbsp;<input required className="Form_field_label" ref="color" style={{width:'6vw',height:'3vw', cursor:"pointer"}} type="color" /></label>
								
							</div>

						</div>

						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Vehicle Type</label>
								<div className="Form_field_select">
									<select required className="Form_field_input" ref="vehicleType" style={{width:'15vw',height:'fit-content',cursor:"pointer"}}>
									  <option value="0">Own Vehicle</option>
								  	  <option value="1">Rent Vehicle</option>
									</select>
								</div>
							</div>
							
							<div className="Form_field">
								<label className="Form_field_label">Body Type</label>
								<div className="Form_field_select">
									<select required className="Form_field_input" ref="bodyType" style={{width:'15vw',height:'fit-content',cursor:"pointer"}}>
									  <option value="0">Open Body</option>
								  	  <option value="1">Closed Body</option>
									</select>
								</div>
							</div>
							
							<div className="Form_field">
								<label className="Form_field_label">Vehicle Make Year</label>
								<input required className="Form_field_input" ref="vehicleMakeYear" style={{width:'20vw',height:'2.6vw'}} type="number" defaultValue=""/>
							</div>
							
						
						</div>

						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Permit</label>
								<input required className="Form_field_input" ref="permit" style={{width:'25vw',height:'2.6vw'}} type="text" defaultValue=""/>
							</div>
							
							<div className="Form_field">
								<label className="Form_field_label">Regsitration Date</label>
								<input required className="Form_field_input" ref="registrationDate" style={{width:'15vw',height:'2.6vw',cursor:"pointer"}} type="date" defaultValue=""/>
							</div>

						</div>
						
						<div className="Form_Fields">
							
							<div className="Form_field">
								<label className="Form_field_label">Vehicle Insurance End Date</label>
								<input required className="Form_field_input" ref="insuranceEndDate" style={{width:'15vw',height:'2.6vw',cursor:"pointer"}} type="date" defaultValue=""/>
							</div>
							
							<div className="Form_field">
								<label className="Form_field_label">FleetHunt Id</label>
								<input required className="Form_field_input" ref="fleetHuntId" style={{width:'30vw',height:'2.6vw'}} type="text" defaultValue=""/>
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
								<input required className="Form_field_input" ref="ownerName" style={{width:'40vw',height:'2.6vw'}}type="text" defaultValue=""/>
							</div>

							<div className="Form_field">
								<label className="Form_field_label">Owner Phone Number</label>
								<input className="Form_field_input" ref="ownerPhone" style={{width:'20vw',height:'2.6vw'}}type="text" defaultValue=""/>
							</div>

						</div>

						<div className="Form_Fields">

							<div className="Form_field">
									<label className="Profile_field_label">Owner Address</label>
									<textarea className="Form_field_input" style={{width:'50.8vw',height:'7vw'}} type="textarea" ref="ownerAddress" defaultValue=""/>
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
									<input className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} type="number" ref="dailyRent" defaultValue=""/>
							</div>
							
							<div className="Form_field">
									<label className="Profile_field_label">Cost Per Day</label>
									<input className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} type="number" ref="costPerDay" defaultValue=""/>
							</div>
							
							<div className="Form_field">
									<label className="Profile_field_label">Cost Per Km</label>
									<input className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} type="number" ref="costPerKM" defaultValue=""/>
							</div>

						</div>
						
						<div className="Form_Fields">
							<button id="Register_Button" className="Register_Button" title="Register" type="submit" onClick={this.handleRegister}> Register</button>
					
							<button id="Reset_Button" className="Reset_Button"  title="Reset" onClick={this.handleReset}>Reset Form</button>
						</div>
						
					</div>
					</form>
					
			</div>
			
		</div>
	);
 }
};

export default VehicleRegistration;

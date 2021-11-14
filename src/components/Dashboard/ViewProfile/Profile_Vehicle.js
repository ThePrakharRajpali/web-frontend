import React, { useState,useRef } from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/UserProfile/UserProfile.css";
import "../../../public/css/Dashboard/MyProfile.css";

const info = {
		Vehicle1 : {
			"_id" : "615ae85f288c4050a2c49bc4",
			"vehicleCode" : "VHNACO001",
            "vehicleType": "Honda Truck",
			"vehicleMakeYear": "2001",
			"vehicleModel":"Honda Truck",
			"bodyType":"Black Coated Metal",
			"registrationNumber":"APNACO001",
			"color":"Black",
			"permit":"XXXXXXX091",
			"registrationDate":"23-01-2001",
			"ownerName":"Owner 1",
			"ownerAddress":"Address Street, Address Building, Address Lane, Address City, Address City, Address State, Address Country",
			"ownerPhone":"991122334401",
			"insuranceEndDate":"23-01-2031",
			"dailyRent":"Rs 100",
			"costPerKM":"Rs 100",
			"costPerDay":"Rs 100",
			"fleetHuntId":"XXXXXXX091",
			"active": false,	
			"__v":0,
		},	
		Vehicle2 : {
			"_id" : "615ae85f288c4050a2c49bc4",
			"vehicleCode" : "VHNACO002",
            "vehicleType": "Honda Truck",
			"vehicleMakeYear": "2002",
			"vehicleModel":"Honda Truck",
			"bodyType":"Black Coated Metal",
			"registrationNumber":"APNACO002",
			"color":"Black",
			"permit":"XXXXXXX092",
			"registrationDate":"23-01-2001",
			"ownerName":"Owner 2",
			"ownerAddress":"Address Street, Address Building, Address Lane, Address City, Address City, Address State, Address Country",
			"ownerPhone":"991122334402",
			"insuranceEndDate":"23-01-2032",
			"dailyRent":"Rs 200",
			"costPerKM":"Rs 200",
			"costPerDay":"Rs 200",
			"fleetHuntId":"XXXXXXX092",
			"active": true,	
			"__v":0,
		},
	    Vehicle3 : {
			"_id" : "615ae85f288c4050a2c49bc4",
			"vehicleCode" : "VHNACO003",
            "vehicleType": "Honda Truck",
			"vehicleMakeYear": "2003",
			"vehicleModel":"Honda Truck",
			"bodyType":"Black Coated Metal",
			"registrationNumber":"APNACO003",
			"color":"Black",
			"permit":"XXXXXXX093",
			"registrationDate":"23-01-2003",
			"ownerName":"Owner 3",
			"ownerAddress":"Address Street, Address Building, Address Lane, Address City, Address City, Address State, Address Country",
			"ownerPhone":"991122334401",
			"insuranceEndDate":"23-01-2033",
			"dailyRent":"Rs 300",
			"costPerKM":"Rs 300",
			"costPerDay":"Rs 300",
			"fleetHuntId":"XXXXXXX093",
			"active": true,	
			"__v":0,
		},
	    Vehicle4 : {
			"_id" : "615ae85f288c4050a2c49bc4",
			"vehicleCode" : "VHNACO004",
            "vehicleType": "Honda Truck",
			"vehicleMakeYear": "2004",
			"vehicleModel":"Honda Truck",
			"bodyType":"Black Coated Metal",
			"registrationNumber":"APNACO004",
			"color":"Black",
			"permit":"XXXXXXX094",
			"registrationDate":"23-01-2004",
			"ownerName":"Owner 4",
			"ownerAddress":"Address Street, Address Building, Address Lane, Address City, Address City, Address State, Address Country",
			"ownerPhone":"991122334404",
			"insuranceEndDate":"23-01-2034",
			"dailyRent":"Rs 400",
			"costPerKM":"Rs 400",
			"costPerDay":"Rs 400",
			"fleetHuntId":"XXXXXXX094",
			"active": true,	
			"__v":0,
		},
}

const Options = (options, handleClick) => {
	console.log(options);
	console.log(options["options"].length);
	if(options["options"].length){
		return(
				<div style={{width:'400px',height:'100px',background:'yellow'}}>
							{options["options"].map((item, index) => {
							return <button onClick={handleClick} value={item}>
									 <div>{item}</div>
									 <div>{item}</div>
									 <div>{item}</div>
								   </button>;
							})}
				</div>
			);
	}
	else{
		return (<div></div>);
	}
};

class Profile_Vehicle extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {value: '',myOptions:[],vehicle:null};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
	this.handleBlock = this.handleBlock.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
	console.log("Enetered input = "+event.target.value);
	var things = ['Vehicle1','Vehicle2','Vehicle3','Vehicle4'];
	var thing1 = things[Math.floor(Math.random()*things.length)];
	var thing2 = things[Math.floor(Math.random()*things.length)];
		
	this.setState({myOptions: [thing1,thing2]});
	console.log(this.state.myOptions);
	var results = document.querySelectorAll(".SearchResult");
	results.forEach((result) => {
		result.style.display = "flex";
	});
  }
	
  handleClick(event) {
   	console.log("Clicked input = "+event.target.value);
	this.setState({vehicle: info[event.target.value]});
	this.refs.myInput.value=event.target.value;
	var results = document.querySelectorAll(".SearchResult");
	results.forEach((result) => {
		result.style.display = "none";
	});
	
  }
	
  handleBlock(event) {
   	console.log("Blocked user");
  }

	// getDataFromAPI = () => {
	// 	console.log("Enetered input = ",this.refs.myInput.value);

	// 	// fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
	// 	// return response.json()
	// 	// }).then((res) => {
	// 	// console.log(res.data)
	// 	// for (var i = 0; i < res.data.length; i++) {
	// 	// 	myOptions.push(res.data[i].employee_name)
	// 	// }
	// 	// setMyOptions(myOptions)
	// 	// })
		
	// 	var things = ['Admin1','Admin2','Admin3','Admin4'];
	// 	var thing1 = things[Math.floor(Math.random()*things.length)];
	// 	var thing2 = things[Math.floor(Math.random()*things.length)];
		
	// 	setMyOptions(['Admin1','Admin2']);
	// }
	
	// getDataFromLi = (index) => {
	// 	console.log("Options Fetched from User");

	// 	// fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
	// 	// return response.json()
	// 	// }).then((res) => {
	// 	// console.log(res.data)
	// 	// for (var i = 0; i < res.data.length; i++) {
	// 	// 	myOptions.push(res.data[i].employee_name)
	// 	// }
	// 	// setMyOptions(myOptions)
	// 	// })
		
	// 	setUser(info.Admin1);
	// 	console.log(user.firstName);
	// }
	
 render() {
	 let vehicleComponent;
	 let vehicle = this.state.vehicle;
	 console.log("here user is ",vehicle);
	 
	 if(vehicle === null || typeof(vehicle) === 'undefined' || vehicle==null){
		vehicleComponent = (<div></div>);
	 }
	 else{
		vehicleComponent = (
			<div>
				
				<div className="Profile_Container">
				  <center>
					 <img className="Profile_Pic" src="https://raw.githubusercontent.com/Nikitha2309/Private/main/truck-33608_1280.png?token=APXZ46L23BVJYUFZDXGGAW3BSPVVO"></img>
					 <div className="Profile_Name">{vehicle["vehicleCode"]}</div>
					  <div className="Profile_Role">{vehicle["registrationNumber"]}</div>
					  <div className="Profile_UserCode">{vehicle["active"] ? "Status: Active ": "Status: Blocked"}</div>
					  <button className={vehicle["active"] ? "BlockButton": "BlockButtonDisabled"} onClick={this.handleBlock.bind(this)} disabled={vehicle["active"] ? false: true}>Block Vehicle</button>
				  </center>
				</div>
				
				<div className="Profile_PersonalInfo" style={{top: '0vw', height:'45vw', marginBottom:"5vw"}}>
	
					<div className="Profile_Field_Container">
						
						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label" style={{fontSize:"1.7vw",color: "#646464",marginLeft:"2vw"}}>Vehicle Info</label>
							</div>

						</div>
						
						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Registration Number</label>
								<input required className="Profile_field_input"  style={{width:'18vw',height:'2.6vw'}}type="text" value={vehicle["registrationNumber"]} disabled={true}/>
							</div>

							<div className="Profile_field">
								<label className="Profile_field_label">Vehicle Model</label>
								<input className="Profile_field_input" value={vehicle["vehicleModel"]} disabled={true} style={{width:'19vw',height:'2.6vw'}}type="text" />
							</div>

						</div>

						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Vehicle Type</label>
								<input required className="Profile_field_input" value={vehicle["vehicleType"]} disabled={true} style={{width:'30vw',height:'2.6vw'}} type="email" />
							</div>
						
						</div>
						
						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Body Type</label>
								<input required className="Profile_field_input" value={vehicle["bodyType"]} disabled={true} style={{width:'30vw',height:'2.6vw'}} type="text" />
							</div>
							
						</div>
						
						<div className="Profile_Fields">
							
							<div className="Profile_field">
								<label className="Profile_field_label">Vehicle Make Year</label>
								<input required className="Profile_field_input" value={vehicle["vehicleMakeYear"]} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Profile_field">
								<label className="Profile_field_label">Color</label>
								<input required className="Profile_field_input" value={vehicle["color"]} disabled={true} style={{width:'19vw',height:'2.6vw'}} type="text" />
							</div>

						</div>

						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Permit</label>
								<input required className="Profile_field_input" value={vehicle["permit"]} disabled={true} style={{width:'19vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Profile_field">
								<label className="Profile_field_label">FleetHunt Id</label>
								<input required className="Profile_field_input" value={vehicle["fleetHuntId"]} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
							</div>
							

						</div>
						
						<div className="Profile_Fields">
							
							<div className="Profile_field">
								<label className="Profile_field_label">Regsitration Date</label>
								<input required className="Profile_field_input" value={vehicle["registrationDate"]} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Profile_field">
								<label className="Profile_field_label">Vehicle Insurance End Date</label>
								<input required className="Profile_field_input" value={vehicle["insuranceEndDate"]} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
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
						
						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label" style={{fontSize:"1.7vw",color: "#646464",marginLeft:"2vw"}} >Owner Info</label>
							</div>

						</div>
						
						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Owner Name</label>
								<input required className="Profile_field_input" value={vehicle["ownerName"]} disabled={true} style={{width:'30vw',height:'2.6vw'}}type="text"/>
							</div>
						
						</div>
							
						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Owner Phone Number</label>
								<input className="Profile_field_input" value={vehicle["ownerPhone"]} disabled={true} style={{width:'20vw',height:'2.6vw'}}type="text" />
							</div>

						</div>

						<div className="Profile_Fields">

							<div className="Profile_field">
									<label className="Profile_field_label">Owner Address</label>
									<textarea className="Profile_field_input" style={{width:'35.8vw',height:'fit-content'}} type="textarea" value={vehicle["ownerAddress"]} disabled={true}/>
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
						
						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label" style={{fontSize:"1.7vw",color: "#646464",marginLeft:"2vw"}}>Expense Info</label>
							</div>

						</div>
						
						<div className="Profile_Fields">

							<div className="Profile_field">
									<label className="Profile_field_label">Daily Rent</label>
									<input className="Profile_field_input" value={vehicle["dailyRent"]} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Profile_field">
									<label className="Profile_field_label">Cost Per Day</label>
									<input className="Profile_field_input" value={vehicle["costPerDay"]} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
							</div>
							
						</div>
							
						<div className="Profile_Fields">
							
							<div className="Profile_field">
									<label className="Profile_field_label">Cost Per Km</label>
									<input className="Profile_field_input" value={vehicle["costPerKM"]} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
							</div>

						</div>
						
					</div>
						  	
			    </div>
				
			</div>
		);
	 }
	 
	return (
		<div className="Dashboard" style={{paddingBottom:"2vw"}}>
			
			<div>
				
				<input className="SearchBarInput" type="text" placeholder="Search Vehicle" ref="myInput" onChange={this.handleChange}></input>
				
				<div className="SearchBarIcon">
					<IconContext.Provider className="SearchBarIcon" value={{ color: "#ffffff", size:'1.33vw' }}>
					<AiIcons.AiOutlineSearch />
			    </IconContext.Provider> 
				</div>
			 
			</div>
			
			
			<div style={{height:'auto'}} ref="SearchResults">
				{this.state.myOptions.map((item, index) => {
				return (
					<div className="SearchResult">
						<button className="SearchResultItem" style={{width:'33%'}} onClick={this.handleClick} value={item}>{index+" "+item + " " + item + " " + item}</button>
						<button className="SearchResultItem" style={{width:'33%'}} onClick={this.handleClick} value={item}>{index+" "+item}</button>
						<button className="SearchResultItem" style={{width:'33%'}} onClick={this.handleClick} value={item}>{index+" "+item}</button>
					</div>
					);
				})}
			</div>
			
			<div>{vehicleComponent}</div>
			
		</div>
	);
 }
};

export default Profile_Vehicle;

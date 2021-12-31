import React, {  } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/UserProfile/UserProfile.css";
import "../../../public/css/Dashboard/MyProfile.css";
import "../../../public/css/Dashboard/UserRegistration.css";
import dummyTruck from "../../../public/photos/dummyTruck.png";

class ProfileVehicle extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {searchQuery: '',searchResults:[],user:null, userCode:null, fleetHuntId:null, allItems:null, itemsLoaded:false};
	  
	this.getallItems();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
	this.handleBlock = this.handleBlock.bind(this);
  }
	
  async getallItems(){
	  
	  console.log("feteching posts now")

	  const config = 
	  {
			method: "post",
			url: "https://www.naataconnection.com/api/vehicle/",
			headers: {
			  "Content-Type": "application/json",
			},
	  };

		axios(config)
		.then((res) => {
			if(res.status==200){
				console.log(res.data.data);
				this.setState({allItems:res.data.data, itemsLoaded:true})
				console.log("curr items: ",this.state.allItems);
			}else{
				alert("Pls try after some time");
			}
		})
		.catch((err) => {
			console.log(err);
			alert("Pls try after some time")
		});
	 
  }
	
  updateSearchResults(){
	  var query = this.state.searchQuery;
	  var items = this.state.allItems;
	  
	  if(items == undefined){
		  alert("No Vehicle exists!!");
	  }else{
		  items = items.filter(item => (item["registrationNumber"]).toLowerCase().indexOf(query) !== -1 || item["vehicleCode"].indexOf(query) !== -1 || item["vehicleModel"].indexOf(query) !== -1);
		  this.setState({searchResults: items});

		  console.log("Updated Search Results: ",this.state.searchResults);

		  var results = document.querySelectorAll(".SearchResult");
		  results.forEach((result) => {
			 result.style.display = "flex";
		  });
	  }
  }

  handleChange(event) { 
    this.setState({searchQuery: event.target.value});
	console.log("Entered search query = "+event.target.value); 
	this.updateSearchResults();
  }
	
  handleClick(event) {
   	
	var results = document.querySelectorAll(".SearchResult");
	results.forEach((result) => {
		result.style.display = "none";
	});
	  
	var userCode = event.target.value;
	console.log("clicked on : ",userCode);
	  
	this.setState({userCode:userCode});
	this.refs.myInput.value=userCode;
	  
	const data = JSON.stringify({vehicleCode:userCode});
	const config = 
	 {
		method: "post",
		url: "https://www.naataconnection.com/api/vehicle/all",
		headers: {
		  "Content-Type": "application/json",
		},
		data: data,
	 };

	axios(config)
	.then((res) => {
		if(res.status==200){
			var user = res.data.data;
			var userCode = res.data.data.vehicleCode;
			var fleetHuntId = res.data.data.fleetHuntId;
			this.setState({user:user, userCode:userCode, fleetHuntId:fleetHuntId});
			console.log("user: ",user," userCode: ",userCode," fleetHuntId: ",fleetHuntId);
		}else{
			alert("Pls Try Again!!!");
		}
	})
	.catch((err) => {
		console.log(err);
		alert("Pls Try Again!!!")
	});
	
  }
	
  handleBlock(event) {
    	confirmAlert({
		  title: "Confirm to Block",
		  message: "Are you sure to block this vehicle ?? This action can't be undone !!",
		  buttons: [
			{
			  label: "Yes",
			  onClick: () => {
				  const data = JSON.stringify({"fleetHuntId":this.state.fleetHuntId});
				  const config = 
				  {
						method: "post",
						url: "https://www.naataconnection.com/api/vehicle/block",
						headers: {
						  "Content-Type": "application/json",
						},
						data: data,
				  };
				  axios(config)
					.then((res) => {
						if(res.status==200){
							console.log("Vehicle Blocked");
							alert("Vehicle Blocked. Please reload the page to see updated profile.");
						}else{
							alert("Pls try after some time.");
						}
					})
					.catch((err) => {
						console.log(err);
						alert("Pls try after some time.")
					});
			  }
			},
			{
			  label: "No",
			  onClick: () => {
				  console.log("User Not Blocked");
			  }
			}
		  ]
		});
  }

 render() {
	 let userComponent;
	 let user = this.state.user;
	 let vehicle = this.state.user;
	 
	 if(user === null || typeof(user) === 'undefined' || user==null){
		userComponent = (<div></div>);
	 }else{
		let insuranceDate = vehicle["insuranceEndDate"].substring(0,10);
	    let regDate = vehicle["registrationDate"].substring(0,10);
		userComponent = (
			<div>
				
				<div className="Profile_Container">
				  <center>
					 <img className="Profile_Pic" src={dummyTruck}></img>
					 <div className="Profile_Name">{vehicle["vehicleCode"]}</div>
					  <div className="Profile_Role">{vehicle["registrationNumber"]}</div>
					  <div className="Profile_UserCode">{vehicle["active"] ? "Status: Active ": "Status: Blocked"}</div>
					  <button className={vehicle["active"] ? "BlockButton": "BlockButtonDisabled"} onClick={this.handleBlock} disabled={vehicle["active"] ? false: true}>Block Vehicle</button>
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
								<input required className="Profile_field_input" value={vehicle["vehicleType"]==0 ? "Own Vehicle" : vehicle["vehicleType"]==1 ? "Rent Vehicle" : ""} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="email" />
							</div>
						
							<div className="Profile_field">
								<label className="Profile_field_label">Body Type</label>
								<input required className="Profile_field_input" value={vehicle["bodyType"]==0 ? "Open Body" : vehicle["vehicleType"]==1 ? "Closed Body" : ""} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
							</div>
							
						</div>
						
						<div className="Profile_Fields">
							
							<div className="Profile_field">
								<label className="Profile_field_label">Vehicle Make Year</label>
								<input required className="Profile_field_input" value={vehicle["vehicleMakeYear"]} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Form_field">
								<label className="Form_field_label">Color&nbsp;&nbsp;
									<input required className="Form_field_label" value={vehicle["color"]} disabled={true} style={{width:'6vw',height:'4vw'}} type="color" />
								</label>
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
								<input required className="Profile_field_input" value={ regDate } disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
							</div>
							
							<div className="Profile_field">
								<label className="Profile_field_label">Vehicle Insurance End Date</label>
								<input required className="Profile_field_input" value={insuranceDate} disabled={true} style={{width:'15vw',height:'2.6vw'}} type="text" />
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
	 
	 let component;
	 let loaded = this.state.itemsLoaded;
	 
	 if(!loaded){
		 component = (
			 <div style={{padding:"auto", verticalAlign:"center",horizontalAlign:"center", textAlign:"center", marginTop:"7vw"}}>
				 <center>
					 <h1 style={{color:"#0f1185", fontSize:"7vw", margin:"auto" }} >Loading Page !!!</h1>
				 </center>
			 </div>
		 );
	 }else{
		 component = (
			 <div>

				 <div>

				 <input className="SearchBarInput" type="text" placeholder="Search Vehicle" ref="myInput" onChange={this.handleChange}></input>

				 <div className="SearchBarIcon">
				 <IconContext.Provider className="SearchBarIcon" value={{ color: "#ffffff", size:'1.33vw' }}>
				 <AiIcons.AiOutlineSearch />
				 </IconContext.Provider> 
				 </div>

				 </div>

				 <div style={{height:'auto'}} ref="SearchResults">
					 {this.state.searchResults.map((item, index) => {
						 return (
							 <div className="SearchResult">
								 <button className="SearchResultItem" style={{width:'30%'}} onClick={this.handleClick} value={item["vehicleCode"]}>{item["registrationNumber"]}</button>
								 <button className="SearchResultItem" style={{width:'50%'}} onClick={this.handleClick} value={item["vehicleCode"]}>{item["vehicleModel"]}</button>
								 <button className="SearchResultItem" style={{width:'20%'}} onClick={this.handleClick} value={item["vehicleCode"]}>{item["vehicleCode"]}</button>
							 </div>
							 );
						 })}
				 </div>

				 <div>{userComponent}</div>

			 </div>
		 );
	 }
	 
	 return( 
		  <div className="Dashboard">
			 {component} 
		  </div>	 
	 );
 }
	
};

export default ProfileVehicle;

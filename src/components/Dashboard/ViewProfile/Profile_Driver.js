import React, { useState,useRef } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/UserProfile/UserProfile.css";
import "../../../public/css/Dashboard/MyProfile.css";
import profileDum from "../../../public/photos/profileDum.jpg";

class Profile_Driver extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {searchQuery: '',searchResults:[],user:null, profile:null, userCode:null, allItems:null, itemsLoaded:false};
	  
	this.getallItems();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
	this.handleBlock = this.handleBlock.bind(this);
  }
	
  async getallItems(){
	  
	  console.log("feteching posts now");

	  const config = 
	  {
			method: "get",
			url: "https://www.naataconnection.com/api/users/allDriverwithName",
			headers: {
			  "Content-Type": "application/json",
			},
	  };

		axios(config)
		.then((res) => {
			if(res.status==200){
				console.log(res.data.driver);
				this.setState({allItems:res.data.driver, itemsLoaded:true})
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
	  
	  items = items.filter(item => (item["firstName"] + " " + item["middleName"] + " " + item["lastName"]).toLowerCase().indexOf(query) !== -1 || item["userCode"].indexOf(query) !== -1);
	  this.setState({searchResults: items});
	  
	  console.log("Updated Search Results: ",this.state.searchResults);
	  
	  var results = document.querySelectorAll(".SearchResult");
	  results.forEach((result) => {
		 result.style.display = "flex";
	  });
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
	  
	const data = JSON.stringify({userCode:userCode});
	const config = 
	 {
		method: "post",
		url: "https://www.naataconnection.com/api/users/profile",
		headers: {
		  "Content-Type": "application/json",
		},
		data: data,
	 };

	axios(config)
	.then((res) => {
		if(res.status==200){
			var user = Object.assign(res.data.data.user, res.data.data.profile);
			this.setState({user:user});
			console.log("user: ",user);
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
		  message: "Are you sure to block this user ?? This action can't be undone !!",
		  buttons: [
			{
			  label: "Yes",
			  onClick: () => {
				  const data = JSON.stringify({"userCode":this.state.userCode});
				  const config = 
				  {
						method: "post",
						url: "https://www.naataconnection.com/api/block/user",
						headers: {
						  "Content-Type": "application/json",
						},
						data: data,
				  };
				  axios(config)
					.then((res) => {
						if(res.status==200){
							console.log("User Blocked");
							alert("User Blocked. Please reload the page to see updated profile.");
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
	 
	 if(user === null || typeof(user) === 'undefined' || user==null){
		userComponent = (<div></div>);
	 }else{
		userComponent = (
			<div>
				<div className="Profile_Container">
				  <center>
					 <img className="Profile_Pic" src={user["profileImage"] || profileDum}></img>
					 <div className="Profile_Name">{user["firstName"] + " " + user["middleName"] + user["lastName"] }</div>
					  <div className="Profile_Role">{user["role"]}</div>
					  <div className="Profile_UserCode">{user["userCode"]}</div>
					  <div className="Profile_UserCode">{user["active"] ? "Status: Active ": "Status: Blocked"}</div>
					  <button className={user["active"] ? "BlockButton": "BlockButtonDisabled"} onClick={this.handleBlock} disabled={user["active"] ? false: true}>Block User</button>
				  </center>
				</div>
				
				<div className="Profile_Docs">
					  <div className="Profile_Docs_Title">Documents</div>
					  
					  <div className="Profile_Doc">
						  <center>
							  <iframe className="Profile_id1" src="https://docs.google.com/viewerng/viewer?url=http%3A%2F%2Fwww.africau.edu%2Fimages%2Fdefault%2Fsample.pdf&embedded=true"></iframe>
							  <div className="Profile_Doc_Label">
								  <IconContext.Provider value={{ color: "#ffffff" }}>
										<RiIcons.RiProfileLine />
								  </IconContext.Provider> 
								  &nbsp; &nbsp; Aadhar Id
							  </div>
						  </center>
					  </div>

					  <div className="Profile_Doc">
						  <center>
							  <iframe className="Profile_id1" src="https://docs.google.com/viewerng/viewer?url=http%3A%2F%2Fwww.africau.edu%2Fimages%2Fdefault%2Fsample.pdf&embedded=true"></iframe>
							  <div className="Profile_Doc_Label">
								  <IconContext.Provider value={{ color: "#ffffff" }}>
										<RiIcons.RiProfileLine />
								  </IconContext.Provider> 
								  &nbsp; &nbsp; Aadhar Id
							  </div>
						  </center>
					  </div>
					  
				</div>
				
				<div className="Profile_PersonalInfo" style={{top: '0vw', height:'53vw'}}>
				    <div className="Profile_PersonalInfo_Title">Personal Info</div>	 

					<div className="Profile_Field_Container">
						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">First Name</label>
								<input className="Profile_field_input" style={{width:'11.9vw',height:'2.6vw'}}type="text" value={user["firstName"]} disabled={true}/>
							</div>

							<div className="Profile_field">
								<label className="Profile_field_label">Middle Name</label>
								<input className="Profile_field_input" style={{width:'11.9vw',height:'2.6vw'}}type="text" value={user["middleName"]} disabled={true}/>
							</div>

							<div className="Profile_field">
								<label className="Profile_field_label">Last Name</label>
								<input className="Profile_field_input" style={{width:'11.9vw',height:'2.6vw'}}type="text" value={user["lastName"]} disabled={true}/>
							</div>

						</div>

						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Email Id</label>
								<input className="Profile_field_input" style={{width:'27.29vw',height:'2.6vw'}}type="text" value={user["emailId"]} disabled={true}/>
							</div>

						</div>

						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Mobile Number</label>
								<input className="Profile_field_input" style={{width:'15vw',height:'2.6vw'}}type="text" value={user["contact"]} disabled={true}/>
							</div>

							<div className="Profile_field">
								<label className="Profile_field_label">Secondary Contact Number</label>
								<input className="Profile_field_input" style={{width:'15vw',height:'2.6vw'}}type="text" value={user["secondaryContact"]} disabled={true}/>
							</div>

						</div>

						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Emergency Contact Number</label>
								<input className="Profile_field_input" style={{width:'15vw',height:'2.6vw'}}type="text" value={user["emergencyContact"]} disabled={true}/>
							</div>

						</div>

						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Address</label>
								<textarea className="Profile_field_input" style={{width:'34.8vw',height:'fit-content'}} type="textarea" value={user["address"]} disabled={true}/>
							</div>

						</div>

						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">City</label>
								<textarea className="Profile_field_input" style={{width:'15.8vw',height:'2.8vw'}} type="textarea" value={user["city"]} disabled={true}/>
							</div>

							<div className="Profile_field">
								<label className="Profile_field_label">State</label>
								<textarea className="Profile_field_input" style={{width:'15.8vw',height:'2.8vw'}} type="textarea" value={user["state"]} disabled={true}/>
							</div>

						</div>

						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Blood Group</label>
								<input className="Profile_field_input" style={{width:'15vw',height:'2.6vw'}}type="text" value={user["bloodGroup"]} disabled={true}/>
							</div>

							<div className="Profile_field">
								<label className="Profile_field_label">Age</label>
								<input className="Profile_field_input" style={{width:'15vw',height:'2.6vw'}}type="text" value={user["age"]} disabled={true}/>
							</div>

						</div>

						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Date of Joining</label>
								<input className="Profile_field_input" style={{width:'15vw',height:'2.6vw'}}type="text" value={user["dateOfJoining"]} disabled={true}/>
							</div>

							<div className="Profile_field">
								<label className="Profile_field_label">Date of Termination</label>
								<input className="Profile_field_input" style={{width:'15vw',height:'2.6vw'}}type="text" value={user["dateOfTermination"]} disabled={true}/>
							</div>

						</div>
						
						<div className="Profile_Fields">

							<div className="Profile_field">
								<label className="Profile_field_label">Driving License Type</label>
								<input className="Profile_field_input" style={{width:'15vw',height:'2.6vw'}}type="text" value={user["drivingLicenseType"]} disabled={true}/>
							</div>

							<div className="Profile_field">
								<label className="Profile_field_label">Driving License Expiry Date</label>
								<input className="Profile_field_input" style={{width:'15vw',height:'2.6vw'}}type="text" value={user["drivingLicenseExpiryDate"]} disabled={true}/>
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

				 <input className="SearchBarInput" type="text" placeholder="Search Driver" ref="myInput" onChange={this.handleChange}></input>

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
								 <button className="SearchResultItem" style={{width:'67%'}} onClick={this.handleClick} value={item["userCode"]}>{(item["firstName"]==undefined ? "" : item["firstName"]) +" "+ (item["middleName"]==undefined ? "" : item["middleName"]) +" "+(item["lastName"]==undefined ? "" : item["lastName"])}</button>
								 <button className="SearchResultItem" style={{width:'33%'}} onClick={this.handleClick} value={item["userCode"]}>{item["userCode"]}</button>
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

export default Profile_Driver;

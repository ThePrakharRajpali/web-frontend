import React, { useState,useRef } from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/UserProfile/UserProfile.css";
import "../../../public/css/Dashboard/UserProfile/Customer.css";
import "../../../public/css/Dashboard/MyProfile.css";

const info = {
		Admin1 : {
			"_id" : "615ae85f288c4050a2c49bc4",
			"firstName" : "Admin1 Admin1 Admin1 Admin1",
            "middleName": "Admin1",
			"lastName": "Admin1",
			"emailId":"admin1@gmail.com",
			"contact":"67585938839",
			"userCode":"NCADMIN0001",
			"secondaryContact":"98789604034",
			"address":"Address Street, Address Building, Address Lane, Address City, Address City, Address State, Address Country",
			"city":"Mumbai",
			"state":"Maharashtra",
			"emergencyContact":"98789604034",
			"bloodGroup":"A+ve",
			"age":25,
			"dateOfJoining":"25th October 2021",
			"dateOfTermination":"28th December 2021",
			"role":"ADMIN",
			"active": false,		     "profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
			"__v":0,
			"profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
		},	
		Admin2 : {
			"_id" : "615ae85f288c4050a2c49bc4",
			"firstName" : "Admin2",
            "middleName": "Admin2",
			"lastName": "Admin2",
			"emailId":"admin2@gmail.com",
			"contact":"67585938839",
			"secondaryContact":"98789604034",
			"address":"Address Street, Address Building, Address Lane, Address City, Address City, Address State, Address Country",
			"city":"Mumbai",
			"state":"Maharashtra",
			"emergencyContact":"98789604034",
			"bloodGroup":"A+ve",
			"age":25,
			"dateOfJoining":"25th October 2021",
			"dateOfTermination":"28th December 2021",
			"userCode":"NCADMIN0002",
			"role":"ADMIN",
			"active": true,		     "profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
			"__v":0,
			"profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
		},
		Admin3 : {
			"_id" : "615ae85f288c4050a2c49bc4",
			"firstName" : "Admin3",
            "middleName": "Admin3",
			"lastName": "Admin3",
			"emailId":"admin3@gmail.com",
			"contact":"67585938839",
			"userCode":"NCADMIN0003",
			"secondaryContact":"98789604034",
			"address":"Address Street, Address Building, Address Lane, Address City, Address City, Address State, Address Country",
			"city":"Mumbai",
			"state":"Maharashtra",
			"emergencyContact":"98789604034",
			"bloodGroup":"A+ve",
			"age":25,
			"dateOfJoining":"25th October 2021",
			"dateOfTermination":"28th December 2021",
			"role":"ADMIN",
			"active": true,		     "profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
			"__v":0,
			"profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
		},	
		Admin4 : {
			"_id" : "615ae85f288c4050a2c49bc4",
			"firstName" : "Admin4",
            "middleName": "Admin4",
			"lastName": "Admin4",
			"emailId":"admin4@gmail.com",
			"contact":"67585938839",
			"userCode":"NCADMIN0004",
			"secondaryContact":"98789604034",
			"address":"Address Street, Address Building, Address Lane, Address City, Address City, Address State, Address Country",
			"city":"Mumbai",
			"state":"Maharashtra",
			"emergencyContact":"98789604034",
			"bloodGroup":"A+ve",
			"age":25,
			"dateOfJoining":"25th October 2021",
			"dateOfTermination":"28th December 2021",
			"role":"ADMIN",
			"active": true,		     "profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
			"__v":0,
			"profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
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

class UserProfile_DeliveryBoy extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {value: '',myOptions:[],user:null};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
	this.handleBlock = this.handleBlock.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
	console.log("Enetered input = "+event.target.value);
	var things = ['Admin1','Admin2','Admin3','Admin4'];
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
	this.setState({user: info[event.target.value]});
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
	 let userComponent;
	 let user = this.state.user;
	 console.log("here user is ",user);
	 
	 if(user === null || typeof(user) === 'undefined' || user==null){
		userComponent = (<div></div>);
	 }
	 else{
		userComponent = (
			<div>
				<div className="Profile_Container">
				  <center>
					 <img className="Profile_Pic" src={user["profilePic"]}></img>
					 <div className="Profile_Name">{user["firstName"] + " " + user["middleName"] + user["lastName"] }</div>
					  <div className="Profile_Role">{user["role"]}</div>
					  <div className="Profile_UserCode">{user["userCode"]}</div>
					  <div className="Profile_UserCode">{user["active"] ? "Status: Active ": "Status: Blocked"}</div>
					  <button className={user["active"] ? "BlockButton": "BlockButtonDisabled"} onClick={this.handleBlock.bind(this)} disabled={user["active"] ? false: true}>Block User</button>
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
				
				<div className="Profile_PersonalInfo">
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
					</div>
						  	
			    </div>
			</div>
		);
	 }
	 
	return (
		<div className="Dashboard">
			
			<div>
				
				<input className="SearchBarInput" type="text" placeholder="Search Delivery Boy" ref="myInput" onChange={this.handleChange}></input>
				
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
			
			<div>{userComponent}</div>
			
		</div>
	);
 }
};

export default UserProfile_DeliveryBoy;

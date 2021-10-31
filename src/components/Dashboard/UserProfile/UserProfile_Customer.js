import React, { useState,useRef } from "react";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/UserProfile/UserProfile.css";
import "../../../public/css/Dashboard/UserProfile/Customer.css";
import "../../../public/css/Dashboard/MyProfile.css";

const info = {
		Admin1 : {
			"_id" : "615ae85f288c4050a2c49bc4",
			"firstName" : "Admin1",
            "middleName": "Admin1",
			"lastName": "Admin1",
			"emailId":"admin1@gmail.com",
			"contact":"67585938839",
			"userCode":"NCADMIN0001",
			"role":"ADMIN",
			"active": true,		     "profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
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
			"role":"ADMIN",
			"active": true,		     "profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
			"__v":0,
			"profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
		},
}

const User = (user) => {
	
	if(user === 4){
		return (<div></div>);
	}
	else{
		return (
			<div className="Profile_Container">
			  <center>
				 <img className="Profile_Pic" src={user["user"]["profilePic"]}></img>
				 <div className="Profile_Name">{user["user"]["firstName"] + " "}</div>
				  <div className="Profile_Role">{user["user"]["firstName"] + " "}</div>
				  <div className="Profile_UserCode">{user["user"]["firstName"] + " "}</div>
			  </center>
			</div>
		);
	}
};

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

class UserProfile_Customer extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {value: '',myOptions:[],user:4};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
	return (
		<div className="Dashboard">
			
			<div>
				
				<input className="SearchBarInput" type="text" placeholder="Search Customer" ref="myInput" onChange={this.handleChange}></input>
				
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
			
			<div>
				<User user={this.state.user}/>
			</div>
			
		</div>
	);
 }
};

export default UserProfile_Customer;

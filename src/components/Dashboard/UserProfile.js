import React, { useState,useRef } from "react";
import "../../public/css/Dashboard/Dashboard.css";
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
			"__v":0
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
			"__v":0
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
			"__v":0
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
			"__v":0
		},
    }

const User = (user) => {
	
	if(user === 4){
		return (<div style={{width:'400px',height:'100px',background:'green'}}></div>);
	}
	else{
		return (<div style={{width:'400px',height:'100px',background:'green'}}>
					<div>
						<div>{user["user"]["firstName"]}</div>
						<div>{user["user"]["firstName"]}</div>
						<div>{user["user"]["firstName"]}</div>
					</div>
				</div>);
	}
};

class UserProfile extends React.Component {
	
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
  }
	
  

  handleClick(event) {
   	console.log("Clicked input = "+event.target.value);
	this.setState({user: info[event.target.value]});		   
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
			UserProfile
			<div>
				
				<input style={{width:'400px',height:'100px',background:'pink'}}type="text" placeholder="search user" ref="myInput" onChange={this.handleChange}></input>
				
				<div style={{width:'400px',height:'100px',background:'yellow'}}>
					{this.state.myOptions.map((item, index) => {
					return <button onClick={this.handleClick} value={item}>{index+" "+item}</button>;
					})}
				</div>
				
				<User user={this.state.user}/>
				
			</div>
		</div>
	);
 }
};
export default UserProfile;

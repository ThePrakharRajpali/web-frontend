import React, { useState,useRef } from "react";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import {DateInput,DatePicker,TimePicker,Calendar,} from "@progress/kendo-react-dateinputs";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import moment from 'moment';
import "../../public/css/Dashboard/Dashboard.css";
import "../../public/css/Dashboard/UserProfile/UserProfile.css";
import "../../public/css/Dashboard/MyProfile.css";
import "../../public/css/Dashboard/Attendance.css";
import "../../public/css/Dashboard/Diesel.css";

const pad2 = (n) => {
  return (n < 10 ? '0' : '') + n;
}

const toDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/")
  return new Date(year, month - 1, day);
}

const dateToStr = (dateObj) => {
	var month = pad2(dateObj.getMonth()+1);//months (0-11)
	var day = pad2(dateObj.getDate());//day (1-31)
	var year= dateObj.getFullYear();

	return day+"/"+month+"/"+year;
}

const getDates = (startDate, endDate) => {
  const dates = []
  let currentDate = startDate;
  const addDays = function (days) {
    const date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date;
  }
  while (currentDate <= endDate) {
    dates.push(dateToStr(currentDate))
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
}

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
			"companyName":"Naata Connections",
			"department":"Management Department",
			"gst":"78ghj21900",
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
			"companyName":"Naata Connections",
			"department":"Management Department",
			"gst":"78ghj21900",
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
			"companyName":"Naata Connections",
			"department":"Management Department",
			"gst":"78ghj21900",
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
			"companyName":"Naata Connections",
			"department":"Management Department",
			"gst":"78ghj21900",
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

class Diesel extends React.Component {
	
	
  constructor(props) {
    super(props);
    this.state = {value: '',myOptions:[],users:[],dates:[],searchOption:'searchByDate'};
	  
    // this.searchOption = React.createRef();
    this.handleChangeSearchOption = this.handleChangeSearchOption.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.handleClick = this.handleClick.bind(this);
	this.handleClickDateChange = this.handleClickDateChange.bind(this);
	this.changeStartDate = this.changeStartDate.bind(this);
	this.removeUser = this.removeUser.bind(this);
	this.handleClear = this.handleClear.bind(this);
	
  }
	
  removeUser(event,user){
	 console.log(user);
	var newUserList = this.state.users;
	var index = newUserList.indexOf(user);
	
	if (index !== -1) {
	  newUserList.splice(index, 1);
	}
	this.setState({users: newUserList});
  }
	
  changeStartDate(event){
    this.setState({startDate: event.target.value});
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
	
  handleChangeSearchOption(event) {
    this.setState({searchOption: event.target.value});
	console.log(this.state.searchOption);
  }
	
  handleClick(event) {
   	console.log("Clicked input = "+event.target.value);
	this.setState({ users: this.state.users.concat(info[event.target.value]) });
	this.refs.myInput.value="";
	var results = document.querySelectorAll(".SearchResult");
	results.forEach((result) => {
		result.style.display = "none";
	});
	
  }
	
  handleClickDateChange(event){
	  var start = this.refs.startDate.value;
	  var end = this.refs.endDate.value;
	  this.setState({dates: getDates(new Date(start), new Date(end))});   
  }
	
  handleClear(event){
		this.setState({users: []});
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
				
				<select className="SearchBarInput" ref="searchOption" onChange={this.handleChangeSearchOption} >
					<option value="searchByDate">Search By Date</option>
					<option value="searchByDateAndUserCode">Search By Date And User Code</option>
					<option value="searchByVehicleNumber">Search By Vehicle Number</option>
					<option value="searchByModeOfPayment">Search By Mode of Payment</option>
					<option value="searchByPump">Search By Pump</option>
					<option value="searchByDateRange">Search By Date Range</option>
				</select>
				
				
				<div className="SearchBarDropDown">
					<IconContext.Provider className="SearchBarDropDown" value={{ color: "#7E8080", size:'1.33vw' }}>
					<RiIcons.RiArrowDownSFill />
			    </IconContext.Provider> 
				</div>
			 
			</div>
			
			{ 
				this.state.searchOption == "searchByDate" ? 
				 (
					<input className="SearchBarInput" type="date" onChange={this.handleChange} style={{width:'25vw'}}></input>
				 ) : 
				this.state.searchOption == "searchByDateAndUserCode" ?
				(
					<div>
						<input className="SearchBarInput" type="date" onChange={this.handleChange} style={{width:'25vw'}}></input>
						<input className="SearchBarInput" type="text" placeholder="Enter User Code" ref="myInput" onChange={this.handleChange} style={{width:'25vw'}}></input>
					</div>
				)  :
				this.state.searchOption == "searchByVehicleNumber" ?
				(
					<input className="SearchBarInput" type="text" placeholder="Enter Vehicle Number" ref="myInput" onChange={this.handleChange} style={{width:'25vw'}}></input>
				) :
				this.state.searchOption == "searchByModeOfPayment" ?
				(
					<div>
						<select className="SearchBarInput">
							<option value="phonePe">PhonePe</option>
							<option value="cash">Cash</option>
						</select>
						<div className="SearchBarDropDown">
							<IconContext.Provider className="SearchBarDropDown" value={{ color: "#7E8080", size:'1.33vw' }}>
								<RiIcons.RiArrowDownSFill />
							</IconContext.Provider> 
						</div>
					</div>
				) :
				this.state.searchOption == "searchByPump" ?
				(
					<input className="SearchBarInput" type="text" placeholder="Enter Pump" ref="myInput" onChange={this.handleChange} style={{width:'25vw'}}></input>
				) :
				(
					<div>
						<input className="SearchBarInput" type="date" onChange={this.handleChange} style={{width:'25vw'}} placeholder="Start Date"></input>
						<input className="SearchBarInput" type="date" onChange={this.handleChange} style={{width:'25vw'}} placeholder="End Date"></input>
					</div>
				)
			}
			
			
			
			
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
			
			<div className="DateRangeRow">
				<div className="DateRangeTitle">Date Range</div>
				<div className="dateInput">
					<label className="dateInputLabel">Start Date</label>
					<input type="date" className="dateInputInput" ref="startDate" disabled={false} onChange={this.handleClickDateChange}></input>
				</div>
				<div className="dateInput">
					<label className="dateInputLabel">End Date</label>
					<input type="date" className="dateInputInput" ref="endDate" disabled={false} onChange={this.handleClickDateChange} ></input>
				</div>
				<button className="dateButton" onClick={this.handleClickDateChange}></button>

			</div>
			
			<div className="clearAttendanceRow">
			      <button className="clearAttendanceButton" onClick={this.handleClear}>Clear Dashboard</button>
			</div>
			
			<div className="AttendanceTableDiv">
				<table className="AttendanceTable">
				<tr className="AttendanceRow1">
					<td className="AttendanceCell"></td>
					{this.state.dates.map((item) => {
				return (
					<td className="AttendanceCell">{item}</td>
					);
				})}
				</tr>
				
				{this.state.users.map((item,index) => {
				return (
					<tr className={index%2 ? "AttendanceRow1": "AttendanceRow2"}>
						<td className="AttendanceCell">
							{item.firstName}
							<button className="AttendanceUserDelete" onClick={()=>{
																					console.log(item);
																					var newUserList = this.state.users;
																					var index = newUserList.indexOf(item);

																					if (index !== -1) {
																					  newUserList.splice(index, 1);
																					}
																					this.setState({users: newUserList});}}                                              type='button'>
								<IconContext.Provider value={{ color: "#E5584F", size:'1vw' }}>
									<RiIcons.RiCloseCircleLine />
								</IconContext.Provider> 
							</button>
							<button className="AttendanceUserDonwload" >
								<IconContext.Provider value={{ color: "#52B788", size:'1vw' }}>
									<RiIcons.RiDownload2Line />
								</IconContext.Provider> 
							</button>
						</td>
						{this.state.dates.map((item) => {return (<td className="AttendanceCell">
																	 P
																	 &nbsp;
																	 &nbsp;
																	<IconContext.Provider className="SearchBarIcon" value={{ color: "#F3752B", size:'1.33vw' }}>
																	 <AiIcons.AiOutlineClockCircle />
																	&nbsp;
																	
																    <RiIcons.RiMapPin2Line />
																		
																	 </IconContext.Provider> 
																 </td>);})}
					</tr>
	             );
				  })}
				</table>
			</div>
			
			<button className="AttendanceDownload">
				<IconContext.Provider value={{ color: "#ffffff", size:'1vw' }}>
					<RiIcons.RiFileDownloadLine />
			    </IconContext.Provider> 
				&nbsp; Download
			</button>
			
		</div>
	);
 }
};

export default Diesel;

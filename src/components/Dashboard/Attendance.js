import React, {  } from "react";
import axios from "axios";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import "../../public/css/Dashboard/Dashboard.css";
import "../../public/css/Dashboard/UserProfile/UserProfile.css";
import "../../public/css/Dashboard/MyProfile.css";
import "../../public/css/Dashboard/Attendance.css";

const pad2 = (n) => {
  return (n < 10 ? '0' : '') + n;
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

const changeDateFormat = (date) => {
	 const [year, month, day] = date.split("-");
	 return month+"-"+day+"-"+year;
}

class Attendance extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {allItems:null, itemsLoaded:false ,searchQuery: '',searchResults:[], dates:[],startDate:null,endDate:null,responses:[]};
	  
	this.getallItems();
	  
    this.handleChange = this.handleChange.bind(this);
	this.handleStartDateChange = this.handleStartDateChange.bind(this);
	this.handleEndDateChange = this.handleEndDateChange.bind(this);
	this.handleClick = this.handleClick.bind(this);
	this.removeUser = this.removeUser.bind(this);
  }
	
  async getallItems(){
	  
	  console.log("feteching posts now");

	  const config = 
	  {
			method: "get",
			url: "https://www.naataconnection.com/api/users/",
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
	
  removeUser(event){
	  var user = event.target.value;
	  console.log(user);
	  var newUserList = this.state.responses;
	  var index = newUserList.indexOf(user);
	
	  if (index !== -1) {
	    newUserList.splice(index, 1);
	  }
	  this.setState({responses: newUserList});
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
	var userCode = event.target.value;
   	console.log("Clicked input = "+userCode);
	this.refs.searchQuery.value="";
	var results = document.querySelectorAll(".SearchResult");
	results.forEach((result) => {
		result.style.display = "none";
	});
	  
	const data = JSON.stringify({userCode:userCode, startDate:changeDateFormat(this.state.startDate), endDate:changeDateFormat(this.state.endDate) });
	const config = 
	 {
		method: "post",
		url: "https://www.naataconnection.com/api/attendance/getReportByDateAndUserCode",
		headers: {
		  "Content-Type": "application/json",
		},
		data: data,
	 };

	axios(config)
	.then((res) => {
		if(res.status==200){
			console.log("res: ",res);
			this.setState({ responses: this.state.responses.concat(res) });
		}else{
			alert("Pls Try Again!!!");
		}
	})
	.catch((err) => {
		console.log(err);
		alert("Pls Try Again!!!")
	});
	  
  }
	
  updateDates(start, end){
	 console.log("so updating the dates  now");
	 var dates = getDates(new Date(start), new Date(end));
	 if(start==null || end == null)
	 {

	 }
	  else
	  {
		this.setState({ dates: dates}); 
	  }
  }
	
  handleStartDateChange(event){
	  var start = event.target.value;
	  // console.log("changed Start Date: ",event.target.value);
	  // console.log("req format: ", changeDateFormat(start));
	  this.setState({startDate:event.target.value});
	  // console.log("updated Start Date value");
	  // console.log("so now start: ",event.target.value,"; end: ",this.state.endDate);
	  this.updateDates(event.target.value,this.state.endDate);
  }
	
  handleEndDateChange(event){
	  var end = event.target.value;
	  // console.log("changed End Date: ",event.target.value);
	  this.setState({endDate:event.target.value});
	  // console.log("updated End Date value");
	  // console.log("so now start: ",this.state.startDate,"; end: ",event.target.value);
	  this.updateDates(this.state.startDate, event.target.value);
  }
	
  handleClear(){
		this.setState({responses: []});
  }
	
  render() {
	 
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

					<input className="SearchBarInput" type="text" placeholder="Add a Employee" ref="searchQuery" onChange={this.handleChange}></input>

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
							<button className="SearchResultItem" style={{width:'67%'}} onClick={this.handleClick} value={item["userCode"]}>{ (item["firstName"]==undefined ? "" : item["firstName"]) +" "+ (item["middleName"]==undefined ? "" : item["middleName"]) +" "+(item["lastName"]==undefined ? "" : item["lastName"])}</button>   
								 <button className="SearchResultItem" style={{width:'33%'}} onClick={this.handleClick} value={item["userCode"]}>{item["userCode"]}</button>
						</div>
						);
					})}
				</div>

				<div className="DateRangeRow">
					<div className="DateRangeTitle">Date Range</div>
					<div className="dateInput">
						<label className="dateInputLabel">Start Date</label>
						<input type="date" className="dateInputInput" ref="startDate" disabled={false} onChange={this.handleStartDateChange}></input>
					</div>
					<div className="dateInput">
						<label className="dateInputLabel">End Date</label>
						<input type="date" className="dateInputInput" ref="endDate" disabled={false} onChange={this.handleEndDateChange} ></input>
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

					{this.state.responses.map((item,index) => {
					return (
						<tr className={index%2 ? "AttendanceRow1": "AttendanceRow2"}>
							<td className="AttendanceCell">
								{item}
								<button className="AttendanceUserDelete" onClick={this.removeUser} value={item} type='button'>
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
							{this.state.dates.map((item) => 
							  {return (
								<td className="AttendanceCell">
									P &nbsp; &nbsp;
									<IconContext.Provider className="SearchBarIcon" value={{ color: "#F3752B", size:'0.75vw' }}>
										<AiIcons.AiOutlineClockCircle />&nbsp;
										<RiIcons.RiMapPin2Line />
									</IconContext.Provider> 
								</td>
							  );})}
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
	 
	 return( 
		  <div className="Dashboard">
			 {component} 
		  </div>	 
	 );
  }
	
};

export default Attendance;

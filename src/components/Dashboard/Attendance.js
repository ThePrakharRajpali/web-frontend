import React, {  } from "react";
import axios from "axios";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import moment from 'moment';
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

const diffNumDays = (date1, date2) => {
	const [year1, month1, day1] = date1.split("-");
	const [year2, month2, day2] = date2.split("-");
	const newDate1 = new Date(day1 + "/" + month1 + "/" +year1);
	const newDate2 = new Date(day2 + "/" + month2 + "/" +year2);
	var time_difference = date2.getTime() - date1.getTime();
	var days_difference = time_difference / (1000 * 60 * 60 * 24);
}

class Attendance extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {allItems:null, itemsLoaded:false ,searchQuery: '',searchResults:[], dates:[],startDate:null,endDate:null,responses:[],userCodes:[]};
	  
	this.getallItems();
	  
    this.handleChange = this.handleChange.bind(this);
	this.handleStartDateChange = this.handleStartDateChange.bind(this);
	this.handleEndDateChange = this.handleEndDateChange.bind(this);
	this.handleClick = this.handleClick.bind(this);
	// this.removeUser = this.removeUser.bind(this);
	// this.updateTable = this.updateTable.bind(this);
  }
	
  async getallItems(){
	  
	  console.log("feteching posts now");

	  const config = 
	  {
			method: "post",
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
	
  // fullName(userCode){
  // var items = this.state.allItems;
  // var item = items.filter(item => (item["userCode"] == userCode));
  // return  (item["firstName"]==undefined ? "" : item["firstName"]) 
  // +" "+ 
  // (item["middleName"]==undefined ? "" : item["middleName"]) 
  // +" "+
  // (item["lastName"]==undefined ? "" : item["lastName"]) ;	  
  // }
	
  removeUser(userCode){
	  
	  const updateTable = (startDate,endDate, userCodes) => {
	  console.log("enetered update table")
	  if(startDate == null || endDate == null){
		  console.log("uhh dates are null ??")
	  }else{
		const data = JSON.stringify({userCode:userCodes,startDate:startDate,endDate:endDate });
		const config = 
		 {
			method: "post",
			url: "https://www.naataconnection.com/api/attendance/getReportAllUsers",
			headers: {
			  "Content-Type": "application/json",
			},
			data: data,
		 };
		  
		  console.log(data);

			axios(config)
			.then((res) => {
				if(res.status==200){
					console.log("res: ",res.data.data);
					this.setState({ responses: res.data.data });
				}else{
					alert("Pls Try Again!!!");
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Pls Try Again!!!")
			});
	  }
      }
	  
	  // var user = event.target.value;
	  var user = userCode;
	  console.log("remove user ",user);
	  var newUserList = this.state.userCodes;
	  var index = newUserList.indexOf(user);
	
	  if (index !== -1) {
	    newUserList.splice(index, 1);
	  }
	  this.setState({userCodes: newUserList});
	  console.log("new users list: ",newUserList)
	  updateTable(this.state.startDate, this.state.endDate, newUserList);
  }
	
  updateSearchResults(){
	  var query = this.state.searchQuery;
	  var items = this.state.allItems;
	  
	  items = items.filter(item => (item["firstName"] + " " + item["middleName"] + " " + item["lastName"]).toLowerCase().indexOf(query) !== -1 && item["role"]!=="CUSTOMER" || item["userCode"].indexOf(query) !== -1 && item["role"]!=="CUSTOMER");
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
	
  // updateTable(){
  // console.log("enetered update table")
  // if(this.state.startDate == null || this.state.endDate == null){
		  
  // }else{
  // const data = JSON.stringify({userCode:this.state.userCodes,startDate:changeDateFormat(this.state.startDate),endDate:changeDateFormat(this.state.endDate) });
  // const config = 
  // {
  // method: "post",
  // url: "https://www.naataconnection.com/api/attendance/getReportByDateAndUserCode",
  // headers: {
  // "Content-Type": "application/json",
  // },
  // data: data,
  // };

  // axios(config)
  // .then((res) => {
  // if(res.status==200){
  // console.log("res: ",res);
  // this.setState({ responses: res });
  // }else{
  // alert("Pls Try Again!!!");
  // }
  // })
  // .catch((err) => {
  // console.log(err);
  // alert("Pls Try Again!!!")
  // });
  // }
  // }
	
  handleClick(event) {
	  
	const updateTable = (startDate,endDate, userCodes) => {
	  console.log("enetered update table")
	  if(startDate == null || endDate == null){
		  console.log("uhh dates are null ??")
	  }else{
		const data = JSON.stringify({userCode:userCodes,startDate:startDate,endDate:endDate });
		const config = 
		 {
			method: "post",
			url: "https://www.naataconnection.com/api/attendance/getReportAllUsers",
			headers: {
			  "Content-Type": "application/json",
			},
			data: data,
		 };
		  
		  console.log(data);

			axios(config)
			.then((res) => {
				if(res.status==200){
					console.log("res: ",res.data.data);
					this.setState({ responses: res.data.data });
				}else{
					alert("Pls Try Again!!!");
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Pls Try Again!!!")
			});
	  }
    }
	  
	var userCode = event.target.value;
   	console.log("Clicked input = "+userCode);
	this.refs.searchQuery.value="";
	var results = document.querySelectorAll(".SearchResult");
	results.forEach((result) => {
		result.style.display = "none";
	});
	console.log("updated userCodes : ",this.state.userCodes.concat(userCode));    
	this.setState({ userCodes: this.state.userCodes.concat(userCode) });
	updateTable(this.state.startDate, this.state.endDate, this.state.userCodes.concat(userCode));
  }
	
  updateDates(start, end){
	  
	  
	 const updateTable = (startDate,endDate, userCodes) => {
	  console.log("enetered update table")
	  if(startDate == null || endDate == null){
		  console.log("uhh dates are null ??")
	  }else{
		const data = JSON.stringify({userCode:userCodes,startDate:startDate,endDate:endDate });
		const config = 
		 {
			method: "post",
			url: "https://www.naataconnection.com/api/attendance/getReportAllUsers",
			headers: {
			  "Content-Type": "application/json",
			},
			data: data,
		 };
		  
		  console.log(data);

			axios(config)
			.then((res) => {
				if(res.status==200){
					console.log("res: ",res.data.data);
					this.setState({ responses: res.data.data });
				}else{
					alert("Pls Try Again!!!");
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Pls Try Again!!!")
			});
	  }
     }
	  
	 console.log("so updating the dates  now; start: ",start," ,end: ",end);
	 var dates = getDates(new Date(start), new Date(end));
	 if(start==null || end == null){

	 }else{
		this.setState({ dates: dates}); 
		updateTable(start, end, this.state.userCodes);
		console.log("called update table");
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
	  
	const diffNumDays = (date1, date2) => {
		console.log("calculating diff")
		const [year1, month1, day1] = date1.split("-");
		const [year2, month2, day2] = date2.split("-");
		const newDate1 = new Date(date1);
		const newDate2 = new Date(date2);
		var time_difference = newDate2 - newDate1;
		return time_difference / (1000 * 60 * 60 * 24);
	 }
	
	const diffNumDays2 = (date2) => {
		console.log("calculating diff")
		// const [year1, month1, day1] = date1.split("-");
		const [year2, month2, day2] = date2.split("-");
		const newDate1 = new Date(Date.now());
		const newDate2 = new Date(date2);
		var time_difference = newDate2 - newDate1;
		return Math.floor(time_difference / (1000 * 60 * 60 * 24));
	 }
	
	const diffNumDays3 = (date1)=>{
		console.log("calculating diff")
		// const [year1, month1, day1] = date1.split("-");
		const [year1, month1, day1] = date1.split("-");
		const newDate1 = new Date(date1);
		const newDate2 = new Date(Date.now());
		var time_difference = newDate2 - newDate1;
		return Math.floor(time_difference / (1000 * 60 * 60 * 24));
	}
	
	let allItems = this.state.allItems;
	const fullName = (userCode) => {
	   var items = this.state.allItems;
	   var item = items.filter(item => (item["userCode"] == userCode))[0];
	   return  (item["firstName"]==undefined ? "" : item["firstName"]) 
		       +" "+ 
			   (item["middleName"]==undefined ? "" : item["middleName"]) 
			   +" "+
			   (item["lastName"]==undefined ? "" : item["lastName"]) ;	  
	}
	 
	let component;
	let loaded = this.state.itemsLoaded;
	  
	let attendaceTableComponent;
	let startDate = this.state.startDate;
	let endDate = this.state.endDate;
	let userCodes = this.state.userCodes;
	let responses = this.state.responses;
	  
	if(startDate == null || endDate==null){
		attendaceTableComponent = (
		    <>
				{userCodes.map((item,index) => {
					return (
						<tr className={index%2 ? "AttendanceRow1": "AttendanceRow2"}>
							<td className="AttendanceCell">
								{fullName(item)}
								<button className="AttendanceUserDelete" onClick={()=>this.removeUser(item)} value={item} type='button'>
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
						</tr>
					 );
				})}
			</>
		);
	}else{		
		attendaceTableComponent = (
		    <>
				{responses.map((item,index) => {
			        // console.log("start date: ", startDate," ,doj: ",item["dateOfJoining"]," diff days: ",diffNumDays(startDate,item["dateOfJoining"]));
			        // console.log("end date: ", endDate," ,diff days2: ",diffNumDays2(endDate));
			        const NA1 = Math.max(diffNumDays(startDate,item["dateOfJoining"]),0);
			        const NA2 = Math.max(diffNumDays2(endDate),0);
			 		const mid = Math.max(diffNumDays(startDate, endDate) - NA1 - NA2 + 1,0);
			        console.log("here ",NA1, mid, NA2);
					return (
						<tr className={index%2 ? "AttendanceRow1": "AttendanceRow2"}>
							<td className="AttendanceCell">
								{fullName(item["userCode"])}
								<button className="AttendanceUserDelete" onClick={()=>this.removeUser(item["userCode"])} value={item["userCode"]} type='button'>
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
							{Array.from(Array(NA1), (e, i) => {
								return (
									  <td className="AttendanceCell">
										--
									</td>
								  );
							  })}
							{Array.from(Array(mid), (e, i) => {
								return (
									  <td className="AttendanceCell">
										mid
									</td>
								  );
							  })}
							{Array.from(Array(NA2), (e, i) => {
								return (
									  <td className="AttendanceCell">
										--
									</td>
								  );
							  })}
							
						</tr>
					 );
				})}
			</>
		);
	}
	 
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
						
						{attendaceTableComponent}

						{/*{this.state.responses.map((item,index) => {
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
					  })}*/}
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

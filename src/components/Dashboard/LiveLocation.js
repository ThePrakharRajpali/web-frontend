import React, {  } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import moment from 'moment';
import { IconContext } from "react-icons/lib";
import "../../public/css/Dashboard/Dashboard.css";
import "../../public/css/Dashboard/UserProfile/UserProfile.css";
import "../../public/css/Dashboard/MyProfile.css";
import "../../public/css/Dashboard/Attendance.css";

class LiveLocation extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {allItems:null, itemsLoaded:false ,searchQuery: '',searchResults:[],userCodes:[], responses:[],user:null, latitude:null, longitude:null, fullName:null, url:null};
	  
	this.getallItems();
	  
    this.handleChange = this.handleChange.bind(this);
	this.handleClick = this.handleClick.bind(this);
	  this.handleClear = this.handleClear.bind(this);
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
	
  // const updateResponses = (userCodes) => {
  // const data = JSON.stringify({userCode:userCodes});
  // const config = 
  // {
  // method: "patch",
  // url: "https://www.naataconnection.com/api/userLiveLocation/update",
  // headers: {
  // "Content-Type": "application/json",
  // },
  // data: data
  // };

  // axios(config)
  // .then((res) => {
  // if(res.status==200){
  // console.log(res);
  // console.log(res.data.data);
  // this.setState({responses:res.data.data})
  // }else{
  // alert("Pls try after some time");
  // }
  // })
  // .catch((err) => {
  // console.log(err);
  // alert("Pls try after some time")
  // });
  // }
	
  removeUser(userCode){
	  
	  const updateResponses = (userCodes) => {
		  const data = JSON.stringify({userCode:userCodes});
		  const config = 
		  {
				method: "patch",
				url: "https://www.naataconnection.com/api/userLiveLocation/update",
				headers: {
				  "Content-Type": "application/json",
				},
				data: data
		  };

			axios(config)
			.then((res) => {
				if(res.status==200){
					console.log(res);
					console.log(res.data.data);
					this.setState({responses:res.data.data})
				}else{
					alert("Pls try after some time");
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Pls try after some time")
			});
	  }
	  
	  var userSelect = userCode;
	  console.log("remove user ",userSelect);
	  var newUserList = this.state.userCodes;
	  var index = newUserList.indexOf(userSelect);
	
	  if (index !== -1) {
	    newUserList.splice(index, 1);
	  }
	  this.setState({userCodes: newUserList});
	  updateResponses(newUserList);
	  console.log("new users list: ",newUserList)
  }
	
  // updateUser(userCode){
	  
  // // this.setState({user: userCode});
  // const data = JSON.stringify({userCodes:[userCode]});
  // const config = 
  // {
  // method: "post",
  // url: "https://www.naataconnection.com/api/users/",
  // headers: {
  // "Content-Type": "application/json",
  // },
  // data: data,
  // };

  // axios(config)
  // .then((res) => {
  // if(res.status==200){
  // // const lati = ((Math.random()-0.5)*200).toString();
  // // const longi = ((Math.random()-0.5)*200).toString();
  // const lati = "16.515072";
  // const longi = "80.6387712";
  // // const url = "https://maps.google.com/maps?q="+lati+","+longi+"&hl=es;z=14&key=AIzaSyCg2784sAScVab_bompeHK1M-SE8CAJR3s&amp;output=embed";
  // const url = "https://www.google.com/maps/embed/v1/place?q="+lati+","+longi+"&key=AIzaSyCg2784sAScVab_bompeHK1M-SE8CAJR3s";
  // console.log("lat: ",lati," and long: ",longi, " and url: ",url);
  // this.setState({
  // user:userCode, 
  // latitude:lati, 
  // longitude:longi, 			
  // url:url
  // });
  // }else{
  // alert("Pls try after some time");
  // }
  // })
  // .catch((err) => {
  // console.log(err);
  // alert("Pls try after some time")
  // });
	  
  // }
	
  updateSearchResults(){
	  var query = this.state.searchQuery;
	  var items = this.state.allItems;
	  
	  items = items.filter(item => 
						   item!=null && 
						   ( (item["firstName"] + " " + item["middleName"] + " " + item["lastName"]).toLowerCase().indexOf(query) !== -1 
						   && item["role"]!=="CUSTOMER" 
						   && item["role"]!=="MANAGER" 
						   || item["userCode"].indexOf(query) !== -1 
						   && item["role"]!=="CUSTOMER" 
						   && item["role"]!=="MANAGER"));
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
	  
	const updateResponses = (userCodes) => {
		  const data = JSON.stringify({userCode:userCodes});
		  const config = 
		  {
				method: "patch",
				url: "https://www.naataconnection.com/api/userLiveLocation/update",
				headers: {
				  "Content-Type": "application/json",
				},
				data: data
		  };

			axios(config)
			.then((res) => {
				if(res.status==200){
					console.log(res);
					console.log(res.data.data);
					this.setState({responses:res.data.data})
				}else{
					alert("Pls try after some time");
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Pls try after some time")
			});
	  }
	  
	var userCode = event.target.value;
   	console.log("Clicked input = "+userCode);
	this.refs.searchQuery.value="";
	var results = document.querySelectorAll(".SearchResult");
	results.forEach((result) => {
		result.style.display = "none";
	});
	console.log("updated userCodes : ",this.state.userCodes.concat(userCode));  
	updateResponses(this.state.userCodes.concat(userCode));
	this.setState({ userCodes: this.state.userCodes.concat(userCode) });
  }
	
  handleClear(event){
		this.setState({userCodes: [], responses:[]});
  }
	
  giveAlert(item){
	  
	  const fullName = (userCode) => {
	   var items = this.state.allItems;
	   var item = items.filter(item => (item["userCode"] == userCode))[0];
	   return  (item["firstName"]==undefined ? "" : item["firstName"]) 
		       +" "+ 
			   (item["middleName"]==undefined ? "" : item["middleName"]) 
			   +" "+
			   (item["lastName"]==undefined ? "" : item["lastName"]) ;	  
	  }
	  
	  if(item.status==="true"){
		  confirmAlert({
		  title: fullName(item.userCode) + " 's current location",
		  message: "Click the below button to see "+fullName(item.userCode) + "'s current location",
			buttons: [
				{
				  label: "Location",
				  onClick: () => {
                      window.open("https://maps.google.com/maps?q="+item.latitude+","+item.longitutde+"&hl=es;z=14&amp;");
				  }
				}
			]
		 });
	  }else{
		  confirmAlert({
		  title: fullName(item.userCode) + " 's current location",
		  message: item.message,
			buttons: [
				{
				  label: "Okay",
				  onClick: () => {}
				}
			]
		});
	  }
  }
	
  render() {
	
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
	let user = this.state.user;
	let latitude = this.state.latitude;
	let longitude = this.state.longitude;
	let url = this.state.url;
	let userCodes = this.state.userCodes;
	let responses = this.state.responses;
	  
	 
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
					<div style={{margin:"auto", fontSize:"2vw", color:"white"}}>Users Added</div>
				</div>

				<div className="clearAttendanceRow">
					  <button className="clearAttendanceButton" onClick={this.handleClear}>Clear Dashboard</button>
				</div>

				<div className="AttendanceTableDiv">
					<table className="AttendanceTable">
						<tr className="AttendanceRow1">
							<td className="AttendanceCell" style={{fontSize:"1.8vw", fontWeight:"bold", width:"65%"}}>Name</td>
							<td className="AttendanceCell" style={{fontSize:"1.8vw", fontWeight:"bold", width:"25%"}}>User Code</td>
							<td className="AttendanceCell" style={{fontSize:"1.8vw", fontWeight:"bold", width:"10%"}}>Location</td>
						</tr>
					
					
						{responses.map((item,index) => {
			        		const fullNameOfUser = fullName(item.userCode);
					return (
							<tr className={index%2 ? "AttendanceRow1": "AttendanceRow2"}>
								<td className="AttendanceCell" style={{width:"65%", fontSize:"1.4vw"}}>
									{fullNameOfUser}
									<button className="AttendanceUserDelete" onClick={()=>this.removeUser(item.userCode)} value={item} type='button'>
										<IconContext.Provider value={{ color: "#E5584F", size:'1vw' }}>
											<RiIcons.RiCloseCircleLine />
										</IconContext.Provider> 
									</button>
								</td>
								<td className="AttendanceCell" style={{width:"25%", fontSize:"1.4vw"}}>{item.userCode}</td>
								<td className="AttendanceCell" style={{width:"10%", fontSize:"1.4vw"}}>
									<button style={{width: "2vw", height:"2vw", padding: "auto", backgroundColor:"#F3752B", borderRadius:"0.3vw", cursor:"pointer"}} onClick={()=>this.giveAlert(item)}>
										<IconContext.Provider value={{ color: "#ffffff", size:'1vw' }}>
											<RiIcons.RiMapPin2Fill />
										</IconContext.Provider> 
									</button>
								</td>
							</tr>
					 );
				})}
					</table>
				</div>
				 
				{/*{ user ? (
					 <div>
						 <div className="DateRangeRow" style={{ margin:"auto", padding:"2vw", width:"60vw", height:"fit-content", borderWidth: "5vw", borderBottomRightRadius:"2vw", borderBottomLeftRadius:"2vw",borderColor: "#F3752B", flexDirection:"column"}}>
							<div style={{margin:"auto", fontSize:"2vw", color:"white"}}>{fullName(user) + "'s Location"}</div>
						 <iframe
							src = {url}
							width="450"
							height="300"
							style={{ borderWidth: "5vw", borderBottomRightRadius:"2vw", borderRadius:"2vw",borderColor: "#F3752B", width:"56vw", height:"50vw", margin:"auto", marginTop:"2vw"}}
							allowfullscreen=""
							loading="lazy"
						  ></iframe>
						 </div>
					 </div>
				 ):(
					 <div>
					 </div>
				 )	 
				} */}
				 
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

export default LiveLocation;
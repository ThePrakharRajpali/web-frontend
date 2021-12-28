import React, {  } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import moment from 'moment';
import { IconContext } from "react-icons/lib";
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
// import { withScriptjs, withGoogleMap, GoogleMap, Circle } from "react-google-maps";
import "../../public/css/Dashboard/Dashboard.css";
import "../../public/css/Dashboard/UserProfile/UserProfile.css";
import "../../public/css/Dashboard/MyProfile.css";
import "../../public/css/Dashboard/Attendance.css";
import "../../public/css/Dashboard/LiveLocation.css";
import "../../public/css/Dashboard/UserRegistration.css";

const info=[
	{
		userCode : "NCTP020001",
		latitude : "-34.397",
		longitude : "150.644",
	},
	{
		userCode : "NCTP020002",
		latitude : "43.397",
		longitude : "50.644"
	},
	{
		userCode : "NCTP020003",
		latitude : "50.644",
		longitude : "-34.397"
	},
	{
		userCode : "NCTP020004",
		latitude : "43.397",
		longitude : "150.644"
	},
	
]

const containerStyle = {
  width: '67vw',
  height: '67vw',
  marginTop : '3vw',
  marginLeft : '3vw',
  borderRadius : '4vw'
};

const center = {
  lat: 0,
  lng: 0
};

class LiveLocation extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {allItems:null, itemsLoaded:false ,searchQuery: '',searchResults:[], responses:[],userCodes:[]};
	  
	this.getallItems();
	  
    this.handleChange = this.handleChange.bind(this);
	this.handleClick = this.handleClick.bind(this);
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
	
  removeUser(userCode){
	  
	  var user = userCode;
	  console.log("remove user ",user);
	  var newUserList = this.state.userCodes;
	  var index = newUserList.indexOf(user);
	
	  if (index !== -1) {
	    newUserList.splice(index, 1);
	  }
	  this.setState({userCodes: newUserList});
	  console.log("new users list: ",newUserList)
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
	
  handleClick(event) {
	  
	var userCode = event.target.value;
   	console.log("Clicked input = "+userCode);
	this.refs.searchQuery.value="";
	var results = document.querySelectorAll(".SearchResult");
	results.forEach((result) => {
		result.style.display = "none";
	});
	console.log("updated userCodes : ",this.state.userCodes.concat(userCode));    
	this.setState({ userCodes: this.state.userCodes.concat(userCode) });
  }
	
  render() {
	  
	const marks=[
	{
		userCode : "NCTP020001",
		latitude : "-34.397",
		longitude : "150.644",
	},
	{
		userCode : "NCTP020002",
		latitude : "43.397",
		longitude : "50.644"
	},
	{
		userCode : "NCTP020003",
		latitude : "50.644",
		longitude : "-34.397"
	},
	{
		userCode : "NCTP020004",
		latitude : "43.397",
		longitude : "150.644"
	},
	
	]
	
	// const Map = withScriptjs(
	// 	withGoogleMap(props => (
	// 		<GoogleMap>
	// 		{props.marks.map(marker => (
	// 			<Marker
	// 			  position={{ lat: marker.latitude, lng: marker.longitude }}
	// 			  key={marker.id}
	// 			/>
	// 		))}
	// 		</GoogleMap>
	// 	))
	// );
	
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
				 
				 <button style={{marginTop:"3vw", background: "#E5584F", width:"8vw"}}id="Reset_Button" className="Register_Button" title="Reset" > Reset</button>
				 
				 {/*<Map
                    googleMapURL="http://maps.googleapis.com/maps/api/js?key=[YOUR GOOGLE MAPS KEY]"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onMapClick={this.setMark}
                    marks={marks}
                />;*/}
				 
				 { /* <LoadScript googleMapsApiKey="AIzaSyCg2784sAScVab_bompeHK1M-SE8CAJR3s"> */ }
					  <GoogleMap
						   mapContainerStyle={containerStyle}
        				   center={center}
						   zoom={10}
						  >
						{ /* Child components, such as markers, info windows, etc. */ }
						  {marks.map(marker => (
							<Marker
							  position={{ lat: marker.latitude, lng: marker.longitude }}
							  key={marker.userCode}
							/>
						))}
						
					  </GoogleMap>
				  { /*</LoadScript>*/ }

			</div>
			 );
	 }
	 
	 return( 
		 <LoadScript googleMapsApiKey="AIzaSyCg2784sAScVab_bompeHK1M-SE8CAJR3s">
		  <div className="Dashboard">
			 {component} 
		  </div>	 
		</LoadScript>
	 );
  }
	
};


export default LiveLocation;
// AIzaSyCg2784sAScVab_bompeHK1M-SE8CAJR3s
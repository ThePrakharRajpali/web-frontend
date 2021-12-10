import React, { useState,useRef } from "react";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import {DateInput,DatePicker,TimePicker,Calendar,} from "@progress/kendo-react-dateinputs";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import $ from 'jquery';
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
		Diesel1 : {
			"kmOfVehicle":"1 Km",	"kmOfVehicleImg":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46N7TLYSHWBJRDAWV2DBXDFB4",
			"pump":"pump 1",
			"date":"date 1",
			"liter":1,
			"dieselRate":100,
			"totalAmount":1000,
			"vehicleNumber":"AP00001",
			"userCode":"NC00001",
			"paymentMode":"Mode 1",
			"remarks":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula pellentesque dui in lobortis. Integer efficitur lorem elit, eu rhoncus nisi tristique ut. Aliquam sed ante tortor. Aenean tempor ex a ipsum tempus ullamcorper. Curabitur quis elementum sem. Vivamus ut ultrices ipsum, eget ullamcorper elit. Vivamus aliquet, turpis id vestibulum molestie, orci leo aliquet ligula, vel molestie nunc arcu ac dui. Pellentesque lobortis nunc non erat lobortis semper.",		"billImage":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46N7TLYSHWBJRDAWV2DBXDFB4",
			
		},	
		Diesel2 : {
			"kmOfVehicle":"2 Km",	"kmOfVehicleImg":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46N7TLYSHWBJRDAWV2DBXDFB4",
			"pump":"pump 2",
			"date":"date 2",
			"liter":2,
			"dieselRate":200,
			"totalAmount":2000,
			"vehicleNumber":"AP00002",
			"userCode":"NC00002",
			"paymentMode":"Mode 2",
			"remarks":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula pellentesque dui in lobortis. Integer efficitur lorem elit, eu rhoncus nisi tristique ut. Aliquam sed ante tortor. Aenean tempor ex a ipsum tempus ullamcorper. Curabitur quis elementum sem. Vivamus ut ultrices ipsum, eget ullamcorper elit. Vivamus aliquet, turpis id vestibulum molestie, orci leo aliquet ligula, vel molestie nunc arcu ac dui. Pellentesque lobortis nunc non erat lobortis semper.",		"billImage":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46N7TLYSHWBJRDAWV2DBXDFB4",
			
		},
		Diesel3 : {
			"kmOfVehicle":"3 Km",	"kmOfVehicleImg":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46N7TLYSHWBJRDAWV2DBXDFB4",
			"pump":"pump 3",
			"date":"date 3",
			"liter":3,
			"dieselRate":300,
			"totalAmount":3000,
			"vehicleNumber":"AP00003",
			"userCode":"NC00003",
			"paymentMode":"Mode 3",
			"remarks":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula pellentesque dui in lobortis. Integer efficitur lorem elit, eu rhoncus nisi tristique ut. Aliquam sed ante tortor. Aenean tempor ex a ipsum tempus ullamcorper. Curabitur quis elementum sem. Vivamus ut ultrices ipsum, eget ullamcorper elit. Vivamus aliquet, turpis id vestibulum molestie, orci leo aliquet ligula, vel molestie nunc arcu ac dui. Pellentesque lobortis nunc non erat lobortis semper.",		"billImage":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46N7TLYSHWBJRDAWV2DBXDFB4",
			
		},
		Diesel4 : {
			"kmOfVehicle":"4 Km",	"kmOfVehicleImg":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46N7TLYSHWBJRDAWV2DBXDFB4",
			"pump":"pump 4",
			"date":"date 4",
			"liter":4,
			"dieselRate":400,
			"totalAmount":4000,
			"vehicleNumber":"AP00004",
			"userCode":"NC00004",
			"paymentMode":"Mode 4",
			"remarks":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula pellentesque dui in lobortis. Integer efficitur lorem elit, eu rhoncus nisi tristique ut. Aliquam sed ante tortor. Aenean tempor ex a ipsum tempus ullamcorper. Curabitur quis elementum sem. Vivamus ut ultrices ipsum, eget ullamcorper elit. Vivamus aliquet, turpis id vestibulum molestie, orci leo aliquet ligula, vel molestie nunc arcu ac dui. Pellentesque lobortis nunc non erat lobortis semper.",		"billImage":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46N7TLYSHWBJRDAWV2DBXDFB4",
			
		},
}

class Diesel extends React.Component {
	
	
    constructor(props) {
		super(props);
		this.state = {value: '',myOptions:[],diesels:[],dates:[],searchOption:'searchByDate'};

		this.handleChangeSearchOption = this.handleChangeSearchOption.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
    }

  	handleChange(event) {
		var things = ['Diesel1','Diesel2','Diesel3','Diesel4'];
		var thing1 = things[Math.floor(Math.random()*things.length)];
		var thing2 = things[Math.floor(Math.random()*things.length)];
		var thing3 = things[Math.floor(Math.random()*things.length)];
		// var thing4 = things[Math.floor(Math.random()*things.length)];
		// var thing5 = things[Math.floor(Math.random()*things.length)];

		this.setState({diesels: [info[thing1],info[thing2],info[thing3]]});
  	}
	
  	handleChangeSearchOption(event) {
	this.setState({searchOption: event.target.value});
	console.log(this.state.searchOption);
  	}
	
	handleClick(event) {
		var arrow = event.target;
		console.log("arrow : ",arrow);
		// var siblings = arrow.siblings();
		// console.log("siblings : ",siblings);
		// for(var i=1;i<siblings.length;i++){
		// 	siblings[i].slideToggle("fast","linear");
		// }
		console.log("sibling : ", arrow.nextElementSibling);
		arrow.nextElementSibling.slideToggle();
		// var firstPart = arrow.nextElementSibling;
		// console.log(firstPart);
		// var nextPart = firstPart.nextElementSibling;
		// console.log(nextPart);
		
		// while(nextPart){
		// 	nextPart.slideToggle("fast","linear");
		// 	nextPart = nextPart.nextElementSibling;	
		// 	console.log(nextPart);
		// }
		
		// if(event.target.style.transform=="rotate(-180deg)")  											event.target.style.transform="rotate(0deg)";
		// else 
		// 	event.target.style.transform="rotate(-180deg)";
	}
	
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

				<div>

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
							<select className="SearchBarInput" onChange={this.handleChange} >
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


				</div>
				
				<div>
					{this.state.diesels.map((diesel, index) => {
					return (
						<div className="Diesel_Cards">
							<div className="Form_Field_Container">

								<div className="Form_Fields">

									<div className="Form_field">
										<label className="Form_field_label">Vehicle Number</label>
										<input required className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} disabled={true} value={diesel["vehicleNumber"]}/>
									</div>

									<div className="Form_field">
										<label className="Form_field_label">User Code</label>
										<input className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} disabled={true} value={diesel["userCode"]} />
									</div>

									<div className="Form_field">
										<label className="Form_field_label">Total Amount</label>
										<input required className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} disabled={true} value={diesel["totalAmount"]}/>
									</div>

								</div>
								
								{/* <div className="DieselCardDropDown" >
									<IconContext.Provider className="SearchBarDropDown" value={{ color: "#7E8080", size:'1.73vw' }} onClick={this.handleClick}>
										<RiIcons.RiArrowDownSFill />
									</IconContext.Provider> 
								</div> */}

								<div className="Form_Fields">

									<div className="Form_field">
										<label className="Form_field_label">Km of Vehicle</label>
										<input required className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} disabled={true} value={diesel["kmOfVehicle"]}/>
									</div>

									<div className="Form_field">
										<label className="Form_field_label">Pump</label>
										<input className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} disabled={true} value={diesel["pump"]} />
									</div>

									<div className="Form_field">
										<label className="Form_field_label">Date</label>
										<input required className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} disabled={true} value={diesel["date"]}/>
									</div>

								</div>
								
								<div className="Form_Fields">

									<div className="Form_field">
										<label className="Form_field_label">Number of Liters</label>
										<input required className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} disabled={true} value={diesel["liter"]}/>
									</div>

									<div className="Form_field">
										<label className="Form_field_label">Diesel Rate</label>
										<input className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} disabled={true} value={diesel["dieselRate"]} />
									</div>

									<div className="Form_field">
										<label className="Form_field_label">Payment Mode</label>
										<input required className="Form_field_input" style={{width:'20vw',height:'2.6vw'}} disabled={true} value={diesel["paymentMode"]}/>
									</div>

								</div>
								
								<div className="Form_Fields">

									<div className="Form_field">
										<label className="Form_field_label">Remarks</label>
										<textarea required className="Form_field_input_text_area" style={{width:'60vw',minHeight:'fit-content'}} type="textarea" disabled={true} value={diesel["remarks"]}/>
									</div>

								</div>

							</div>
						</div>
						);
					})}

				</div>

			</div>
		);
	}
};

export default Diesel;

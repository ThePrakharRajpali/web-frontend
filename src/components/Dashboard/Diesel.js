import React, { useState,useRef } from "react";
import axios from "axios";
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
import login_next_button from "../../public/photos/login_next_button.png";

class Diesel extends React.Component {
	
    constructor(props) {
		super(props);
		this.state = {value: '',myOptions:[],diesels:null,dates:[],searchOption:'searchByDate', firstQueryDone:false};

		this.handleChangeSearchOption = this.handleChangeSearchOption.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleClickEnter = this.handleClickEnter.bind(this);
    }
	
  	handleChangeSearchOption(event) {
		this.setState({searchOption: event.target.value});
		console.log(event.target.value);
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
	
	handleClickEnter(event){
		
		if(this.state.searchOption == "searchByDate"){
			if(this.refs.Date1.value == '' || this.refs.Date1.value == null){
				alert('Please Enter the values to search');
			}else{
				const Date1 = this.refs.Date1.value;
				console.log(Date1);
				const data = JSON.stringify({date:Date1});
				const config = 
				 {
					method: "get",
					url: "https://www.naataconnection.com/api/diesel/sortByDate",
					headers: {
					  "Content-Type": "application/json",
					},
					data: data,
				 };
				
				console.log(data);

				axios(config)
				.then((res) => {
					if(res.status==200){
						console.log("res: ",res," length: ",res.data.data.length);
						this.setState({ diesels: res.data.data });
						
					}else{
						alert("Pls Try Again!!!");
					}
				})
				.catch((err) => {
					console.log(err);
					alert("Pls Try Again!!!")
				});
			}
		}else if(this.state.searchOption == "searchByDateAndUserCode"){
			if(this.refs.Date2.value == '' || this.refs.Date2.value == null || this.refs.UserCode.value == '' || this.refs.UserCode.value == null){
				alert('Please Enter the values to search');
			}else{
				console.log(this.refs.Date2.value);
				console.log(this.refs.UserCode.value);
				const data = JSON.stringify({date:this.refs.Date2.value, userCode: this.refs.UserCode.value});
				const config = 
				 {
					method: "get",
					url: "https://www.naataconnection.com/api/diesel/sortByDateAndUserCode",
					headers: {
					  "Content-Type": "application/json",
					},
					data: data,
				 };
				
				console.log(data);

				axios(config)
				.then((res) => {
					if(res.status==200){
						console.log("res: ",res," length: ",res.data.data.length);
						this.setState({ diesels: res.data.data });
						
					}else{
						alert("Pls Try Again!!!");
					}
				})
				.catch((err) => {
					console.log(err);
					alert("Pls Try Again!!!")
				});
			}
		}else if(this.state.searchOption == "searchByVehicleNumber"){
			if(this.refs.VehicleNumber.value == '' || this.refs.VehicleNumber.value == null){
				alert('Please Enter the values to search');
			}else{
				console.log(this.refs.VehicleNumber.value);
				const data = JSON.stringify({vehicleNumber:this.refs.VehicleNumber.value});
				const config = 
				 {
					method: "get",
					url: "https://www.naataconnection.com/api/diesel/sortByVehicleNumber",
					headers: {
					  "Content-Type": "application/json",
					},
					data: data,
				 };
				
				console.log(data);

				axios(config)
				.then((res) => {
					if(res.status==200){
						console.log("res: ",res," length: ",res.data.data.length);
						this.setState({ diesels: res.data.data });
						
					}else{
						alert("Pls Try Again!!!");
					}
				})
				.catch((err) => {
					console.log(err);
					alert("Pls Try Again!!!")
				});
			}
		}else if(this.state.searchOption == "searchByModeOfPayment"){
			console.log(this.refs.PaymentMode.value);
			const data = JSON.stringify({paymentMode:this.refs.PaymentMode.value});
			const config = 
			 {
				method: "get",
				url: "https://www.naataconnection.com/api/diesel/sortByPaymentMode",
				headers: {
				  "Content-Type": "application/json",
				},
				data: data,
			 };

			console.log(data);

			axios(config)
			.then((res) => {
				if(res.status==200){
					console.log("res: ",res," length: ",res.data.data.length);
					this.setState({ diesels: res.data.data });

				}else{
					alert("Pls Try Again!!!");
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Pls Try Again!!!")
			});
		}else if(this.state.searchOption == "searchByPump"){
			if(this.refs.Pump.value == '' || this.refs.Pump.value == null){
				alert('Please Enter the values to search');
			}else{
				console.log(this.refs.Pump.value);
				const data = JSON.stringify({pump:this.refs.Pump.value});
				const config = 
				 {
					method: "get",
					url: "https://www.naataconnection.com/api/diesel/sortByPump",
					headers: {
					  "Content-Type": "application/json",
					},
					data: data,
				 };
				
				console.log(data);

				axios(config)
				.then((res) => {
					if(res.status==200){
						console.log("res: ",res," length: ",res.data.data.length);
						this.setState({ diesels: res.data.data });
						
					}else{
						alert("Pls Try Again!!!");
					}
				})
				.catch((err) => {
					console.log(err);
					alert("Pls Try Again!!!")
				});
			}
		}else if(this.state.searchOption == "searchByDateRange"){
			if(this.refs.StartDate.value== '' || this.refs.StartDate.value == null || this.refs.EndDate.value == '' || this.refs.EndDate.value == null){
				alert('Please Enter the values to search');
			}else{
				console.log(this.refs.StartDate.value);
				console.log(this.refs.EndDate.value);
				const data = JSON.stringify({startDate:this.refs.StartDate.value, endDate:this.refs.EndDate.value});
				const config = 
				 {
					method: "get",
					url: "https://www.naataconnection.com/api/diesel/sortByDateRange",
					headers: {
					  "Content-Type": "application/json",
					},
					data: data,
				 };
				
				console.log(data);

				axios(config)
				.then((res) => {
					if(res.status==200){
						console.log("res: ",res," length: ",res.data.data.length);
						this.setState({ diesels: res.data.data });
						
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
		
		this.setState({firstQueryDone:true});
		
	}
	
	render() {

		let resultComponent;
		if(!this.state.firstQueryDone || this.state.diesels == null){
			resultComponent =  (
						<div> 
						</div>
						);
		}else if(this.state.diesels.length > 0){
			resultComponent = 
				(this.state.diesels.map((diesel, index) => {
					 return  (
						<div className="Diesel_Cards">
							<div className="Diesel_Card_Nums">{index+1}</div>
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
										<textarea required className="Form_field_input_text_area" style={{width:'60vw',height:'8vw'}} type="textarea" disabled={true} defaultValue={diesel["remarks"]}></textarea>
									</div>

								</div>

							</div>
						</div>
						);
					}));
		}else{
			resultComponent =  (
						<div style={{padding:"auto", verticalAlign:"center",horizontalAlign:"center", textAlign:"center", marginTop:"10vw", color:"#0f1185", fontSize:"5vw"}}>
							No Results Found !! 
						</div>
						);
		}
		
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
						<div>
							<input className="SearchBarInput" type="date" style={{width:'25vw'}} ref="Date1" defaultValue=""></input>
							<button className="button-arrow" onClick={this.handleClickEnter}><img src={login_next_button} style={{marginTop:'1vw', top:'0.7vw'}}></img></button>
						</div>
					 ) : 
					this.state.searchOption == "searchByDateAndUserCode" ?
					(
						<div>
							<input className="SearchBarInput" type="date" style={{width:'25vw'}} ref="Date2" defaultValue=""></input>
							<input className="SearchBarInput" type="text" placeholder="Enter User Code" ref="UserCode" defaultValue="" style={{width:'25vw'}}></input>
							<button className="button-arrow" onClick={this.handleClickEnter}><img src={login_next_button} style={{marginTop:'1vw', top:'0.7vw'}}></img></button>
						</div>
					)  :
					this.state.searchOption == "searchByVehicleNumber" ?
					(
						<div>
							<input className="SearchBarInput" type="text" placeholder="Enter Vehicle Number" ref="VehicleNumber" defaultValue="" style={{width:'25vw'}}></input>
							<button className="button-arrow" onClick={this.handleClickEnter}><img src={login_next_button} style={{marginTop:'1vw', top:'0.7vw'}}></img></button>
						</div>
					) :
					this.state.searchOption == "searchByModeOfPayment" ?
					(
						<div>
							<select className="SearchBarInput" ref="PaymentMode">
								<option value="Card">Card</option>
								<option value="Cash">Cash</option>
								<option value="UPI">UPI</option>
							</select>
							<div className="SearchBarDropDown">
								<IconContext.Provider className="SearchBarDropDown" value={{ color: "#7E8080", size:'1.33vw' }}>
									<RiIcons.RiArrowDownSFill />
								</IconContext.Provider> 
							</div>
							<button className="button-arrow" onClick={this.handleClickEnter}><img src={login_next_button} style={{marginTop:'1vw', top:'0.7vw'}}></img></button>
						</div>
					) :
					this.state.searchOption == "searchByPump" ?
					(
						<div>
							<input className="SearchBarInput" defaultValue="" type="text" placeholder="Enter Pump" ref="Pump" style={{width:'25vw'}}></input>
							<button className="button-arrow" onClick={this.handleClickEnter}><img src={login_next_button} style={{marginTop:'1vw', top:'0.7vw'}}></img></button>
						</div>
					) :
					(
						<div>
							<input className="SearchBarInput" defaultValue=""  type="date" style={{width:'25vw'}} placeholder="Start Date" ref="StartDate"></input>
							<input className="SearchBarInput" defaultValue="" type="date" style={{width:'25vw'}} placeholder="End Date" ref="EndDate"></input>
							<button className="button-arrow" onClick={this.handleClickEnter}><img src={login_next_button} style={{marginTop:'1vw', top:'0.7vw'}}></img></button>
						</div>
					)
				}


				</div>
				
				<div>
					{resultComponent}
				</div>

			</div>
		);
	}
};

export default Diesel;

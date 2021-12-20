import React, { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
import "../../public/css/Login/login.css";
import login_logo from "../../public/photos/login_logo.svg";
import login_next_button from "../../public/photos/login_next_button.png";
const maxTime = 600;

class LoginContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {redirect:false, input:null, otpSent: false, otpInput:null, time: {}, seconds: maxTime};

        this.timer = 0;
		this.countDown = this.countDown.bind(this);
		this.handleClick1 = this.handleClick1.bind(this);
		this.handleChange1 = this.handleChange1.bind(this);
	}
	
	secondsToTime(secs){
		let hours = Math.floor(secs / (60 * 60));

		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let obj = {
		  "h": hours,
		  "m": minutes,
		  "s": seconds
		};
		return obj;
	}

	componentDidMount() {
		let timeLeftVar = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeftVar });
	}

	startTimer = () => {
		console.log("Timer Started");
		if (this.timer == 0 && this.state.seconds > 0) {
		  this.timer = setInterval(this.countDown, 1000);
		}
	}

	countDown() {
		// Remove one second, set state so a re-render happens.
		let seconds = this.state.seconds - 1;
		this.setState({
		  time: this.secondsToTime(seconds),
		  seconds: seconds,
		});

		// Check if we're at zero.
		if (seconds == 0) { 
		  alert("Time Up, Pls Try again entering a Email ID or contact !!!");
		  this.setState({otpSent:false, input:null, otpInput:null, seconds: maxTime, time:{}});
		  clearInterval(this.timer);
		}
	}
	
	handleChange1 = (event) => {
	  this.setState({input:event.target.value})
	}
	
	handleChange2 = (event) => {
	  this.setState({otpInput:event.target.value})
	}
	
	sendOTP = (input) => {
		const data = JSON.stringify({emailIdOrContact : this.state.input});
		const config = 
		  {
			method: "post",
			url: "https://www.naataconnection.com/api/user/login_checkUserAndSendOtp",
			headers: {
			  "Content-Type": "application/json",
			},
			data: data,
		 };

		axios(config)
		.then((res) => {
			alert(res.data.message);
			console.log(res);
			if(res.status==200){
				this.refs.emailOrContactInput.value = "";
				this.setState({otpSent:true});
				
				console.log("Timer Started");
				this.startTimer();	
			}
		})
		.catch((err) => {
			console.log(err);
			alert("Pls make sure to enter a valid email Id or contact number that is regsitered earlier.")
		});
	}
	
	handleClick1 = async (event)=> {
		var emailInside;
		console.log(this.state.input);
		if(this.state.input){
			this.sendOTP();
		}else{
			alert("Pls Enter a value to proceed !!")
		}
	}	
	
  	render() {
	  
		 let redirectComponent;
		 let component;
		 if(this.state.redirect){
		 redirectComponent = (<div></div>);
		 }
		 else{
		 redirectComponent = (<div></div>);
		 }

		 if(this.state.otpSent){
			 component = (
				<div className="login-container">
					<img src={login_logo} className="logo"></img>
					<div className="title">Naata</div>
					<input className="OTPinput" placeholder="Enter OTP" onChange={this.handleChange2}></input>
					<div className="text">
						<div className="OTP_timer">
							OTP expires in <span style={{color:"black", fontSize:"2vw"}}>{this.state.time.m}:{this.state.time.s}</span>
						</div>
						<div className="otp_resend" onClick={this.sendOTP}>
							Resend OTP
						</div>
					</div>
					<div className="button-custom">
						<div className="button-title">Submit</div>
						<button className="button-arrow"><img src={login_next_button} className="button-arrow"></img></button>
					</div>
				</div>
			);
		 }else{
			 component = (
				 <div className="login-container">
					<img src={login_logo} className="logo"></img>
					<div className="title">NAATA</div>
					<input className="input icon" placeholder='Email or Phone number' onChange={this.handleChange1} ref="emailOrContactInput"></input>
					<div className="button-custom">
						<div className="button-title">Next</div>
						<button className="button-arrow"><img onClick={this.handleClick1} src={login_next_button} className="button-arrow"></img></button>
					</div>
				</div>
			 );
		 }

		return (
			<div>
				{component}
			</div>
		);
		
    }
	
}

export default LoginContainer; 
import React from "react";
import ReactDOM from "react-dom";
import "../../public/css/Login/login_otp.css";
import login_logo from "../../public/photos/login_logo.svg";
import login_next_button from "../../public/photos/login_next_button.png";
import email from './Login';

class LoginContainer_otp extends React.Component {
	
 constructor(props) {
		super(props);
		this.state = {redirect:false, input:null};


		// this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange = (event) => {
	  // this.setState({input:event.target.value})
		console.log("email is ",email);
	}
	
  render() {
    return (
      <div className="login-container">
		<img src={login_logo} className="logo"></img>
        <div className="title">Naata</div>
		<input className="input" placeholder='Enter OTP' onChange={this.handleChange}></input>
		<div className="text">
			<div className="OTP_timer">
				OTP expires in 00:00
			</div>
			<div className="otp_resend">
				Resend OTP
			</div>
		</div>
		<div className="button-custom">
			<div className="button-title">Submit</div>
			<button className="button-arrow"><img src={login_next_button} className="button-arrow"></img></button>
		</div>
      </div>
    );
  }
}

export default LoginContainer_otp;
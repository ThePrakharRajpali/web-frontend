import React from "react";
import ReactDOM from "react-dom";
import "../../public/css/Login/login_otp.css";

class LoginContainer_otp extends React.Component {
  render() {
    return (
      <div className="login-container">
		<div className="logo"></div>
        <div className="title">Naata</div>
		<input className="input" placeholder='Enter OTP'></input>
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
			<button className="button-arrow"></button>
		</div>
      </div>
    );
  }
}

export default LoginContainer_otp;
import React from "react";
import ReactDOM from "react-dom";
import "../../public/css/Login/login.css";

class LoginContainer extends React.Component {
  render() {
    return (
      <div className="login-container">
		<div className="logo"></div>
        <div className="title">NAATA</div>
		<input className="input icon" placeholder='Email or Phone number'></input>
		<div className="button-custom">
			<div className="button-title">Next</div>
			<button className="button-arrow"></button>
		</div>
      </div>
    );
  }
}

export default LoginContainer;
import React, { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import {
	useHistory ,
  Redirect, Link,
} from "react-router-dom";
import "../../public/css/Login/login.css";
import login_logo from "../../public/photos/login_logo.svg";
import login_next_button from "../../public/photos/login_next_button.png";

class LoginContainer extends React.Component {
	
		constructor(props) {
		super(props);
		  // const history = useHistory();
		this.state = {redirect:false, input:null};
		  

		// this.handleClick = this.handleClick.bind(this);
		// this.renderRedirect = this.renderRedirect.bind(this);
		}
	
	 // renderRedirect = () => {
	 // if (this.state.redirect) {
	 // return <Redirect to='/loginOtpVerification' />
	 // }
	 // }

	
	// handleClick(event) {
	// console.log(this.refs.emailOrContactInput.value);
	// if(this.refs.emailOrContactInput.value){
		
	// 	const data = JSON.stringify({emailIdOrContact : this.refs.emailOrContactInput.value});
	// 	const config = 
	// 	  {
	// 		method: "post",
	// 		url: "https://www.naataconnection.com/api/user/login_checkUserAndSendOtp",
	// 		headers: {
	// 		  "Content-Type": "application/json",
	// 		},
	// 		data: data,
	// 	 };

	// axios(config)
	// .then((res) => {
	// 		alert(res.data.message);
	// console.log(res);
	// 		if(res.status==200){
	// 			console.log("redirecting !!");
	// 			renderRedirect;
	// 			// this.setState({redirect:true});
	// 			// const history = useHistory();
	// 			// history.push("/loginOtpVerification") 
	// 		}
	// })
	// .catch((err) => {
	// 		console.log(err);
	// 		alert("Try again with a valid input...")
	// 	});
		
	// }else{
	// 	alert("Pls Enter a value to proceed !!")
	// }
	// }
	
  render() {
	  const { history } = this.props;
	  // const [input, setinput] = useState();
	  const handleChange = (event) => {
		  // setinput(event.target.value)
		  this.setState({input:event.target.value})
	  }
	  const handleClick = (event)=> {
   			console.log(this.state.input);
			if(this.state.input){
		
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
					console.log("redirecting !!");
					// renderRedirect;
					 console.log("yeah redirecting!!");
		history.push("/loginOtpVerification");
					// this.setState({redirect:true});
					// const history = useHistory();
					// history.push("/loginOtpVerification") 
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Try again with a valid input...")
			});
		
			}else{
				alert("Pls Enter a value to proceed !!")
			}
	  }
    return (
		<div>
			<div className="login-container">
				<img src={login_logo} className="logo"></img>
				<div className="title">NAATA</div>
				<input className="input icon" placeholder='Email or Phone number' ref="emailOrContactInput" onChange={handleChange}></input>
				<div className="button-custom">
					<div className="button-title">Next</div>
					<button className="button-arrow"><img onClick={handleClick} src={login_next_button} className="button-arrow"></img></button>
				</div>
			</div>
		</div>
    );
  }
}

export default LoginContainer;
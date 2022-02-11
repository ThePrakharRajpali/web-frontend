import React, {  } from "react";
import axios from "axios";
import "../../public/css/Dashboard/Dashboard.css";
import "../../public/css/Dashboard/UserRegistration.css";

class Notification extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {};

    this.handleRegister = this.handleRegister.bind(this);
  }
	
  handleRegister(event) {
	  
	    var userCode =  this.refs.userCode.value;
	    var title = this.refs.title.value;
	    var expiryDate = this.refs.expiryDate.value;
	    var content = this.refs.content.value;
	    var image = this.refs.image;
	  
	    console.log("userCode: ",userCode);
	    console.log("title: ",title);
	    console.log("expiryDate: ",expiryDate);
	    console.log("content: ", content);
	    console.log("image: ",image.files);
	    console.log("no.of files: ", image.files.length);
	    // console.log("file: ",image.files[0].path)

		if(!(userCode!="" && title!="" && expiryDate!="" && content!="" && image.files.length != 0)){
			alert("Please fill all required fields to register the user");
		}else{
			
			const formData = new FormData();
            formData.append("userCode", userCode);
			formData.append("title", title);
			formData.append("content", content);
			formData.append("expiryDate", expiryDate);
			formData.append("images", image.files[0]);
			formData.append("isImage", 1);
				
			// const data = JSON.stringify({userCode:userCode, title:title, expiryDate:expiryDate, content:content});

			const config = 
			 {
				method: "post",
				url: "https://www.naataconnection.com/api/notification/create",
				headers: {
				  "Content-Type": "multipart/form-data",
				},
				data: formData,
			 };

			axios(config)
			.then((res) => {
				if(res.status==200){
					alert("Details Submitted.");
					this.handleReset(); 
				}else{
					alert("Pls Try Again!!!");
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Pls Try Again. Make sure the file size doesn't exceed 20 MB.")
			});
		}
	
  }
	
  handleReset() {
   	var inputs = document.querySelectorAll(".Form_field_input");
	inputs.forEach((input) => {
		input.value = "";
	});
  }
	
  render() {
	 
	return (
		<div className="Dashboard">
			
			<div className="UserRegistration">
				<div className="UserRegistration_Title_main" style={{fontColor:"black", fontWeight:"600"}}>Notification Form</div>
				
					<div className="Form_Field_Container">
						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">User Code</label>
								<input required className="Form_field_input" ref="userCode" style={{width:'30vw',height:'2.6vw'}}type="text"/>
							</div>
							
							<div className="Form_field">
								<label className="Form_field_label">Expiry Date</label>
								<input className="Form_field_input" ref="expiryDate" style={{width:'20vw',height:'2.6vw'}}type="date" />
							</div>
							
						</div>

						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Title</label>
								<input className="Form_field_input" ref="title" style={{width:'60vw',height:'2.6vw'}}type="text" />
							</div>

						</div>

						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Content</label>
								<textarea className="Form_field_input" style={{width:'60vw',height:'7vw'}} type="textarea" ref="content"/>
							</div>
							
						</div>

						<div className="Form_Fields">

							<div className="Form_field">
								<label className="Form_field_label">Image<span> ( File size shouldn't exceed 20MB )</span></label>
								<input required className="Form_field_input" ref="image" multiple style={{width:'20vw',height:'2.6vw'}} type="file" />
							</div>

						</div>

						
						<div className="Form_Fields">
							<button id="Register_Button" className="Register_Button" title="Register" onClick={this.handleRegister}> Register</button>
					
							<button id="Reset_Button" className="Reset_Button" title="Reset" onClick={this.handleReset}>Reset Form</button>
						</div>
						
					</div>		
			</div>
			
		</div>
	);
  }
	
};

export default Notification;

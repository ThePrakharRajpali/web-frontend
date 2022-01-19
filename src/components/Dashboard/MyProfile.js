import React from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "../../public/css/Dashboard/Dashboard.css";
import "../../public/css/Dashboard/MyProfile.css";
import profileDum from "../../public/photos/profileDum.jpg";

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editModeEnabled: false,
	  itemsLoaded:false,
      userCode:this.props.userCode,
	  user: null,
	  profile:null
    };
	
	this.getallItems();
	  
	this.handleEditClick = this.handleEditClick.bind(this);
	this.handleSaveClick = this.handleSaveClick.bind(this);
  }
	
  async getallItems(){
	  
	  console.log("fetching profile now");
	  console.log(this.props.userCode);
	  console.log("so cookie is ",Cookies.get('userCode'));
      const data = JSON.stringify({userCode:this.props.userCode});
	  const config = 
	  {
			method: "post",
			url: "https://www.naataconnection.com/api/superUsers/profile",
			headers: {
			  "Content-Type": "application/json",
			},
		    data: data
	  };

		axios(config)
		.then((res) => {
			if(res.status==200){
				console.log(res);
				console.log(res.data.data.superUser);
				// console.log(res.data.data.profile);
				// var user = Object.assign(res.data.data.user, res.data.data.profile);
				var user = res.data.data.superUser;
				this.setState({user:user, itemsLoaded:true})
			}else{
				alert("Pls try after some time");
			}
		})
		.catch((err) => {
			console.log(err);
			alert("Pls try after some time")
		});
	 
  }

  handleEditClick(event) {
	  console.log("so cookie is ",Cookies.get('userCode'));
    this.setState({ editModeEnabled: !this.state.editModeEnabled });
    var edit_button = document.querySelector("#Edit_Button");
    edit_button.classList.add("Profile_Edit_Button_Disabled");
    edit_button.classList.remove("Profile_Edit_Button");
    var save_button = document.querySelector("#Save_Button");
    save_button.classList.add("Profile_Save_Button");
    save_button.classList.remove("Profile_Save_Button_Disabled");
    var inputs = document.querySelectorAll(".Profile_field_input");
    inputs.forEach((input) => {
      input.classList.add("Profile_field_input_enabled");
      input.classList.remove("Profile_field_input");
    });
  }

  handleSaveClick(event) {
    this.setState({ editModeEnabled: !this.state.editModeEnabled });
    var edit_button = document.querySelector("#Edit_Button");
    edit_button.classList.remove("Profile_Edit_Button_Disabled");
    edit_button.classList.add("Profile_Edit_Button");
    var save_button = document.querySelector("#Save_Button");
    save_button.classList.remove("Profile_Save_Button");
    save_button.classList.add("Profile_Save_Button_Disabled");
    var inputs = document.querySelectorAll(".Profile_field_input_enabled");
    inputs.forEach((input) => {
      input.classList.add("Profile_field_input");
      input.classList.remove("Profile_field_input_enabled");
    });
  }

  render() {
	  
	let component;
	let loaded = this.state.itemsLoaded;
	let user = this.state.user;
	let profile = this.state.profile;
	 
	 if(!loaded){
		 component = (
			 <div style={{padding:"auto", verticalAlign:"center",horizontalAlign:"center", textAlign:"center", marginTop:"7vw"}}>
				 <center>
					 <h1 style={{color:"#0f1185", fontSize:"7vw", margin:"auto" }} >Loading Profile !!!</h1>
				 </center>
			 </div>
		 );
	 }else{
		 component = (
			 <div>
				 <div className="Profile_Container">
				  <center>
					<img
					  className="Profile_Pic"
					  src={user["profileImage"] || profileDum}
					></img>
					<div className="Profile_Name">
					  {(user["firstName"]==undefined ? "" : user["firstName"]) +" "+ (user["middleName"]==undefined ? "" : user["middleName"]) +" "+(user["lastName"]==undefined ? "" : user["lastName"])}
					</div>
					<div className="Profile_Role">{user["role"]}</div>
					<div className="Profile_UserCode">
					  {user["userCode"]}
					</div>
				  </center>
				 </div>

				<div className="Profile_PersonalInfo">
				  <div className="Profile_PersonalInfo_Title">Personal Info</div>
				  <form>
					  {/*<button
					  id="Edit_Button"
					  className="Profile_Edit_Button"
					  type="button"
					  title="Edit"
					  onClick={this.handleEditClick}
					  disabled={this.state.editModeEnabled}
					>
					  <IconContext.Provider
						value={{
						  color: "#ffffff",
						  size: "2.11em",
						  className: "Profile_Edit_Icon",
						}}
					  >
						<AiIcons.AiOutlineEdit />
					  </IconContext.Provider>
					  &nbsp; &nbsp; Edit
					</button>*/}

					<div className="Profile_Field_Container">
					  <div className="Profile_Fields">
						<div className="Profile_field">
						  <label className="Profile_field_label">First Name</label>
							<input
							className="Profile_field_input"
							style={{ width: "11.9vw", height: "2.6vw" }}
							type="text"
							defaultValue={user["firstName"]}
							disabled={!this.state.editModeEnabled}
						   />
						  {/*<a
							className="Profile_field_input"
							style={{ width: "11.9vw", height: "2.6vw" }}
							type="text"
							href={user["profileImage"]}
							target="_blank">
							 {user["firstName"]} 
						  </a>*/}
						</div>

						<div className="Profile_field">
						  <label className="Profile_field_label">Middle Name</label>
						  <input
							className="Profile_field_input"
							style={{ width: "11.9vw", height: "2.6vw" }}
							type="text"
							defaultValue={user["middleName"]}
							disabled={!this.state.editModeEnabled}
						  />
						</div>

						<div className="Profile_field">
						  <label className="Profile_field_label">Last Name</label>
						  <input
							className="Profile_field_input"
							style={{ width: "11.9vw", height: "2.6vw" }}
							type="text"
							defaultValue={user["lastName"]}
							disabled={!this.state.editModeEnabled}
						  />
						</div>
					  </div>

					  <div className="Profile_Fields">
						<div className="Profile_field">
						  <label className="Profile_field_label">Email Id</label>
						  <input
							className="Profile_field_input"
							style={{ width: "27.29vw", height: "2.6vw" }}
							type="text"
							defaultValue={user["emailId"]}
							disabled={!this.state.editModeEnabled}
						  />
						</div>
					  </div>

					  <div className="Profile_Fields">
						<div className="Profile_field">
						  <label className="Profile_field_label">Mobile Number</label>
						  <input
							className="Profile_field_input"
							style={{ width: "fit-content", height: "2.6vw" }}
							type="text"
							defaultValue={user["contact"]}
							disabled={!this.state.editModeEnabled}
						  />
						</div>
					  </div>

					  <div className="Profile_Fields">
						<div className="Profile_field">
						  <label className="Profile_field_label">Address</label>
						  <textarea
							className="Profile_field_input"
							style={{ width: "28.8vw", height: "8.8vw" }}
							type="textarea"
							defaultValue={user["address"]}
							disabled={!this.state.editModeEnabled}
						  />
						</div>
					  </div>
					</div>

					{/*<button
					  id="Save_Button"
					  className="Profile_Save_Button_Disabled"
					  type="button"
					  title="Save"
					  onClick={this.handleSaveClick}
					  disabled={!this.state.editModeEnabled}
					>
					  <IconContext.Provider
						value={{
						  color: "#ffffff",
						  size: "2.11em",
						  className: "Profile_Save_Icon",
						}}
					  >
						<AiIcons.AiOutlineSave />
					  </IconContext.Provider>
					  &nbsp; &nbsp; Save
					</button>*/}
				  </form>
				</div>
			 </div>
		 );
	 }
	
	  
    return (
      <div className="Dashboard">
        {component}
      </div>
    );
  }
}

export default MyProfile;

import React from "react";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "../../public/css/Dashboard/Dashboard.css";
import "../../public/css/Dashboard/MyProfile.css";

const info = {
  success: "true",
  data: {
    superUser: {
      _id: "615ae85f288c4050a2c49bc4",
      firstName: "Admin1",
      middleName: "Admin2",
      lastName: "Admin3",
      emailId: "admin@gmail.com",
      contact: "67585938839",
      userCode: "NCADMIN0001",
      role: "ADMIN",
      active: true,
      profilePic:
        "https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46JTAG2ULMHST76YWFDBTIICY",
      __v: 0,
    },
    profile: {
      _id: "615ae85f288c4050a2c49bc4",
      firstName: "Admin1",
      middleName: "Admin2",
      lastName: "Admin3",
      emailId: "admin@gmail.com",
      contact: "67585938839",
      userCode: "NCADMIN0001",
      role: "ADMIN",
      active: true,
      __v: 0,
    },
  },
};

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editModeEnabled: false,
    };
  }

  handleEditClick() {
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

  handleSaveClick() {
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
    return (
      <div className="Dashboard">
        <div className="Profile_Container">
          <center>
            <img
              className="Profile_Pic"
              src={info.data.superUser.profilePic}
            ></img>
            <div className="Profile_Name">
              {info.data.superUser.firstName +
                " " +
                info.data.superUser.middleName +
                " " +
                info.data.superUser.lastName}
            </div>
            <div className="Profile_Role">{info.data.superUser.role}</div>
            <div className="Profile_UserCode">
              {info.data.superUser.userCode}
            </div>
          </center>
        </div>

        <div className="Profile_Docs">
          <div className="Profile_Docs_Title">Documents</div>

          <div className="Profile_Doc">
            <center>
              <iframe
                className="Profile_id1"
                src="https://docs.google.com/viewerng/viewer?url=http%3A%2F%2Fwww.africau.edu%2Fimages%2Fdefault%2Fsample.pdf&embedded=true"
              ></iframe>
              <div className="Profile_Doc_Label">
                <IconContext.Provider value={{ color: "#ffffff" }}>
                  <RiIcons.RiProfileLine />
                </IconContext.Provider>
                &nbsp; &nbsp; Aadhar Id
              </div>
            </center>
          </div>

          <div className="Profile_Doc">
            <center>
              <iframe
                className="Profile_id1"
                src="https://docs.google.com/viewerng/viewer?url=http%3A%2F%2Fwww.africau.edu%2Fimages%2Fdefault%2Fsample.pdf&embedded=true"
              ></iframe>
              <div className="Profile_Doc_Label">
                <IconContext.Provider value={{ color: "#ffffff" }}>
                  <RiIcons.RiProfileLine />
                </IconContext.Provider>
                &nbsp; &nbsp; Aadhar Id
              </div>
            </center>
          </div>
        </div>

        <div className="Profile_PersonalInfo">
          <div className="Profile_PersonalInfo_Title">Personal Info</div>
          <form>
            <button
              id="Edit_Button"
              className="Profile_Edit_Button"
              type="button"
              title="Edit"
              onClick={this.handleEditClick.bind(this)}
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
            </button>

            <div className="Profile_Field_Container">
              <div className="Profile_Fields">
                <div className="Profile_field">
                  <label className="Profile_field_label">First Name</label>
                  <input
                    className="Profile_field_input"
                    style={{ width: "11.9vw", height: "2.6vw" }}
                    type="text"
                    defaultValue={info.data.superUser.firstName}
                    disabled={!this.state.editModeEnabled}
                  />
                </div>

                <div className="Profile_field">
                  <label className="Profile_field_label">Middle Name</label>
                  <input
                    className="Profile_field_input"
                    style={{ width: "11.9vw", height: "2.6vw" }}
                    type="text"
                    defaultValue={info.data.superUser.middleName}
                    disabled={!this.state.editModeEnabled}
                  />
                </div>

                <div className="Profile_field">
                  <label className="Profile_field_label">Last Name</label>
                  <input
                    className="Profile_field_input"
                    style={{ width: "11.9vw", height: "2.6vw" }}
                    type="text"
                    defaultValue={info.data.superUser.lastName}
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
                    defaultValue={info.data.superUser.emailId}
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
                    defaultValue={info.data.superUser.contact}
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
                    defaultValue="Address Street, Address Building, Address Lane, Address City, Address City, Address State, Address Country"
                    disabled={!this.state.editModeEnabled}
                  />
                </div>
              </div>
            </div>

            <button
              id="Save_Button"
              className="Profile_Save_Button_Disabled"
              type="button"
              title="Save"
              onClick={this.handleSaveClick.bind(this)}
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
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default MyProfile;

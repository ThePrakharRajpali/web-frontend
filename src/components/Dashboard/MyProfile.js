import React , { useState }from "react";
import { Document, Page,pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import * as RiIcons from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import "../../public/css/Dashboard/Dashboard.css";
import "../../public/css/Dashboard/MyProfile.css";

const info = {
	"success" :"true",
	"data" : {
		"superUser" : {
			"_id" : "615ae85f288c4050a2c49bc4",
			"firstName" : "Admin1",
            "middleName": "Admin2",
			"lastName": "Admin3",
			"emailId":"admin@gmail.com",
			"contact":"67585938839",
			"userCode":"NCADMIN0001",
			"role":"ADMIN",
			"active": true,		     "profilePic":"https://raw.githubusercontent.com/Nikitha2309/Private/main/profileDum.jpg?token=APXZ46MZKRP5YYGQAGDCW2DBQZASO",
			"__v":0
		},
		"profile" :  {
			"_id" : "615ae85f288c4050a2c49bc4",
			"firstName" : "Admin1",
            "middleName": "Admin2",
			"lastName": "Admin3",
			"emailId":"admin@gmail.com",
			"contact":"67585938839",
			"userCode":"NCADMIN0001",
			"role":"ADMIN",
			"active": true,
			"__v":0
		},	    
	}
}

function MyProfile ()  {
	
  return (
    <div className="Dashboard">
		  <div className="Profile_Container">
			  <center>
			     <img className="Profile_Pic" src={info.data.superUser.profilePic}></img>
			     <div className="Profile_Name">{info.data.superUser.firstName + " " + info.data.superUser.middleName + " " + info.data.superUser.lastName}</div>
				  <div className="Profile_Role">{info.data.superUser.role}</div>
				  <div className="Profile_UserCode">{info.data.superUser.userCode}</div>
			  </center>
		  </div>
		  
		  <div className="Profile_Docs">
			  <div className="Profile_Docs_Title">Documents</div>
			  <div className="Profile_Doc">
				  <center>
					  <iframe className="Profile_id1" src="https://docs.google.com/viewerng/viewer?url=http%3A%2F%2Fwww.africau.edu%2Fimages%2Fdefault%2Fsample.pdf&embedded=true"></iframe>
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
					  <iframe className="Profile_id1" src="https://docs.google.com/viewerng/viewer?url=http%3A%2F%2Fwww.africau.edu%2Fimages%2Fdefault%2Fsample.pdf&embedded=true"></iframe>
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
		  </div>
		  
    </div>
  );
};
export default MyProfile;
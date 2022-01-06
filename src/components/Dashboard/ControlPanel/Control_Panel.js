import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import logo from "../../../public/photos/controlPanel_logo.svg";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import Swal from "sweetalert2";  

const SidebarNav = styled.nav`
background: #00B4D8;
width: 25vw;
display: flex;
justify-content: center;
position: relative;
transition: 350ms;
z-index: 10;
margin-bottom:4vw;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const ControlPanel = () => {
	
	// const [link, setLink] = useState(null);
	
	const download = () => {
		console.log("enetered downloading")
		const config = 
	  {
			method: "post",
			url: "https://www.naataconnection.com/api/db/export",
			headers: {
			  "Content-Type": "application/json",
			},
	  };

		axios(config)
		.then((res) => {
			if(res.status==200){
				console.log(res.data.url)
				// setLink(res.data.url);
				// swal({
				//   title: 'Request Delivered',
				//   text: 'You can continue with your search.',
				//   type: 'success'
				// }).then(function() {
				// 	window.location.href = res.data.url;
				// })
				window.open(res.data.url)
			}else{
				alert("Pls try after some time");
			}
		})
		.catch((err) => {
			console.log(err);
			alert("Pls try after some time")
		});
	}

return (
    <div className="ControlPanel">
			<div className="LogoAndTitle">
				<img className="Logo" alt="logo" src={logo}></img>
				<div className="Title">NAATA</div>
			</div>
			<SidebarNav>
				<SidebarWrap>
					{SidebarData.map((item, index) => {
					return <SubMenu item={item} key={index} />;
					})}
				</SidebarWrap>
			</SidebarNav>
		    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", marginBottom:"4vw", marginTop:"2vw"}}>
				<button id="Register_Button" className="Register_Button" title="Register" onClick={()=>{download()}} 
				style = {{
					position: "relative",
					width: "10vw",
					height: "fit-content",
					textAlign:"center",
					padding:"1.5vw",
					marginLeft:"1.5vw",
					background: "#F3752B",
					borderRadius: "0.83vw",
					fontFamily: "SophiaPro",
					fontStyle: "normal",
					fontWeight: "normal",
					fontSize: "1.5vw",
					lineHeight: "1.9vw",
					alignItems: "center",
					color: "#FFFFFF",
					justifyContent:"center",
					cursor:"pointer"
				}}
				> 
				Download Database</button>
		    </div>
			
	</div>
);
};

export default ControlPanel;

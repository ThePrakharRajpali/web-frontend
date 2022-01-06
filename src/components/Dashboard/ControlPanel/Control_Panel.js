import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import logo from "../../../public/photos/controlPanel_logo.svg";

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
				<button id="Register_Button" className="Register_Button" title="Register" onClick={()=>{}} 
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

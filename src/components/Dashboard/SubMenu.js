import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../public/css/Dashboard/ControlPanel.css";

const SidebarLink = styled(Link)`
 background: #00B4D8;
 padding-top:1vw;
 padding-bottom:1vw;
 padding-left:1vw;
 margin-left:1vw;
 display: flex;
 color: #ffffff;
 
 list-style: none;
 text-decoration: none;
 font-family: SophiaPro;
    font-style: normal;
    font-weight: normal;
    font-size: 1.3vw;
    line-height: 1.5vw;
	
	border-radius: 2vw 0px 0px 2vw;

&:hover {
	background: #00B4D8;
	cursor: pointer;
}

&:active{
   background: #ffffff;
   color:#FB6D3A;
}
`;

const SidebarLabel = styled.span`
background: ${ ({active}) => ( active ?  "#ffffff" :"#00B4D8" )};
padding-left:1vw;
	padding-bottom:1vw;
	padding-top:1vw;
	font-family: SophiaPro;
    font-style: normal;
    font-weight: normal;
    font-size: 1.3vw;
    line-height: 1.5vw;
    color: white;
	text-shadow:none;
	border-radius: 2vw 0px 0px 2vw;
	 -moz-box-shadow:   none;
   -webkit-box-shadow: none;
   box-shadow:         none;


`;

const DropdownLink = styled(Link)`
background: pink;
 padding-top:1vw;
 padding-bottom:1vw;
 padding-left:1vw;
 margin-left:1vw;
 display: flex;
 color: #ffffff;
 
 list-style: none;
 text-decoration: none;
 font-family: SophiaPro;
    font-style: normal;
    font-weight: normal;
    font-size: 1.3vw;
    line-height: 1.5vw;
	
	border-radius: 2vw 0px 0px 2vw;

&:hover {
	background: red;
	cursor: pointer;
}

&:active{
   background: #ffffff;
   color:#FB6D3A;
}
`;

const SidebarLabel2 = styled.span`
background: pink;
padding-left:1vw;
	padding-bottom:1vw;
	padding-top:1vw;
	font-family: SophiaPro;
    font-style: normal;
    font-weight: normal;
    font-size: 1.3vw;
    line-height: 1.5vw;
    color: white;
	text-shadow:none;
	border-radius: 2vw 0px 0px 2vw;
	 -moz-box-shadow:   none;
   -webkit-box-shadow: none;
   box-shadow:         none;


`;
const SubMenu = ({ item }) => {
const [subnav, setSubnav] = useState(false);

const showSubnav = () => setSubnav(!subnav);
	
// const active = () => 

return (
	<>
	<SidebarLink to={item.path}
	onClick={item.subNav && showSubnav}>
		
		{item.icon} &nbsp; &nbsp;   {item.title}
		
		<div className="arrow">
			{item.subNav && subnav? item.iconOpened: item.subNav? item.iconClosed: null}
		</div>
		
	</SidebarLink>
	{subnav && item.subNav.map((item, index) => {
		return (
			<DropdownLink to={item.path} key={index}>
			{item.icon}  &nbsp; &nbsp; {item.title}
			</DropdownLink>
		     );
	})}
	</>
);
};

export default SubMenu;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import "../../../public/css/Dashboard/ControlPanel.css";

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
	 border-radius: 2vw 0vw 0vw 2vw;
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
	const activateMenuLink = (props) => {
		var clicked_item_id = props[0];
		var clicked_item_have_subMenu = props[1];
		console.log(clicked_item_id,clicked_item_have_subMenu);
		var b = false;
		var menuLinks = document.querySelectorAll(".menuLink");
		menuLinks.forEach((menuLink)=>{
			var menuLink_id = menuLink.id;
			if(clicked_item_id==menuLink_id && clicked_item_have_subMenu==0){
				b=true;
				menuLink.style.background= "#ffffff";
				menuLink.style.color="#FB6D3A";
				menuLink.firstChild.style.color="#FB6D3A";
			}else{
				menuLink.style.background= "#00B4D8";
				menuLink.style.color="#ffffff";
				menuLink.firstChild.style.color="#ffffff";
			}
		});

		if(b){
			var subMenuLinks = document.querySelectorAll(".subMenuLink");
			subMenuLinks.forEach((subMenuLink)=>{
				subMenuLink.style.background= "#00B4D8";
				subMenuLink.style.color="#ffffff";
				subMenuLink.firstChild.style.color="#ffffff";
			});
		}
	} ;
	const activateSubMenuLink = (clicked_item_id) => {
		var subMenuLinks = document.querySelectorAll(".subMenuLink");
		subMenuLinks.forEach((subMenuLink)=>{
			var subMenuLink_id = subMenuLink.id;
			if(subMenuLink_id==clicked_item_id){
				subMenuLink.style.background= "#ffffff";
				subMenuLink.style.color="#FB6D3A";
				subMenuLink.firstChild.style.color="#FB6D3A";
			}else{
				subMenuLink.style.background= "#00B4D8";
				subMenuLink.style.color="#ffffff";
				subMenuLink.firstChild.style.color="#ffffff";
			}
		});

		var menuLinks = document.querySelectorAll(".menuLink");
		menuLinks.forEach((menuLink)=>{
			menuLink.style.background= "#00B4D8";
			menuLink.style.color="#ffffff";
			menuLink.firstChild.style.color="#ffffff";
		});
	} ;
	
	return (
			<div>
				<SidebarLink className="menuLink" id={item.title} to={item.path}
				onClick={()=>{if(item.subNav) setSubnav(!subnav);
							  activateMenuLink([item.title,item.subNav ? 1 :0]);}}>

					<IconContext.Provider value={{ color: "#ffffff" }}>
						{item.icon}
					</IconContext.Provider>
					&nbsp; &nbsp;   {item.title}

					<div className="arrow">
						{item.subNav && subnav? item.iconOpened: item.subNav? item.iconClosed: null}
					</div>

				</SidebarLink>

				<div className="subMenu">
					{subnav && item.subNav.map((item, index) => {
						return (
							<DropdownLink className="subMenuLink" id={item.title} to={item.path} key={index} onClick={()=>activateSubMenuLink(item.title)}>
								<IconContext.Provider value={{ color: "#ffffff" }}>
									{item.icon}  
								</IconContext.Provider>
								&nbsp; &nbsp; {item.title}
							</DropdownLink>
							 );
					})}
				</div>
			</div>
		 );
};

export default SubMenu;

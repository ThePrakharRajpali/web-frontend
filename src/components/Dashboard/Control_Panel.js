import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";


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
const [sidebar, setSidebar] = useState(true);

return (
    <div className="ControlPanel">
			<div className="LogoAndTitle">
				<div className="Logo"></div>
				<div className="Title">NAATA</div>
			</div>
			<SidebarNav>
				<SidebarWrap>
					{SidebarData.map((item, index) => {
					return <SubMenu item={item} key={index} />;
					})}
				</SidebarWrap>
			</SidebarNav>
	</div>
);
};

export default ControlPanel;

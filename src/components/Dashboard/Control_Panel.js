import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";


const SidebarNav = styled.nav`
background: pink;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: 0;
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const ControlPanel = () => {
const [sidebar, setSidebar] = useState(true);

return (
    <div>
		<IconContext.Provider value={{ color: "#ffffff" }}>
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
		</IconContext.Provider>
	</div>
);
};

export default ControlPanel;

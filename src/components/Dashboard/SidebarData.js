import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "My Profile 1",
	path: "/Dashboard_MyProfile",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "User Profile 2",
		path: "/Dashboard_UserProfile",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "My Profile 3",
		path: "/Dashboard_MyProfile",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "User Profile 4",
	path: "/Dashboard_UserProfile",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "My Profile 5",
		path: "/Dashboard_MyProfile",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "My Profile 6",
		path: "/Dashboard_MyProfile",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "My Profile 7",
		path: "/Dashboard_MyProfile",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "User Profile 8",
	path: "/Dashboard_UserProfile",
	icon: <FaIcons.FaPhone />,
},
{
	title: "User Profile 9",
	path: "/Dashboard_UserProfile",
	icon: <FaIcons.FaEnvelopeOpenText />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "My Profile 10",
		path: "/Dashboard_MyProfile",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "User Profile 11",
		path: "/Dashboard_UserProfile",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "My Profile 12",
	path: "/Dashboard_MyProfile",
	icon: <IoIcons.IoMdHelpCircle />,
},
];

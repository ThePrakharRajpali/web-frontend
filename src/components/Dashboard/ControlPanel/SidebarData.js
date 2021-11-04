import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "My Profile",
	path: "/Dashboard_MyProfile",
	icon: <RiIcons.RiProfileLine />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Attendance",
	path: "/Dashboard_Attendance",
	icon: <FaIcons.FaRegCalendarAlt />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Live Location",
	path: "/Dashboard_LiveLocation",
	icon: <FaIcons.FaMapMarkerAlt />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "User Profile",
	path: "/Dashboard_UserProfile_Customer",
	icon: <AiIcons.AiOutlineTeam />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
	subNav: [
	{
		title: "Customer",
		path: "/Dashboard_UserProfile_Customer",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Delivery Boy",
		path: "/Dashboard_UserProfile_DeliveryBoy",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Driver",
		path: "/Dashboard_UserProfile_Driver",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Manager",
		path: "/Dashboard_UserProfile_Manager",
		icon: <IoIcons.IoIosPaper />,
	},
	],
	
},
{
title: "User Registration",
path: "/Dashboard_UserRegistration",
icon: <AiIcons.AiOutlineUserAdd />,
iconClosed: <RiIcons.RiArrowDownSFill />,
iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
title: "SuperUser Registration",
path: "/Dashboard_SuperUserRegistration",
icon: <AiIcons.AiOutlineUserAdd />,
iconClosed: <RiIcons.RiArrowDownSFill />,
iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Vehicle Registration",
	path: "/Dashboard_VehicleRegistration",
	icon: <RiIcons.RiCaravanLine />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Service Requests",
	icon: <IoIcons.IoMdHelpCircle />,
	path: "/Dashboard_ServiceRequests_CreateNew",
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
	subNav: [
	{
		title: "Create New",
		path: "/Dashboard_ServiceRequests_CreateNew",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Pending",
		path: "/Dashboard_ServiceRequests_Pending",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Active",
		path: "/Dashboard_ServiceRequests_Active",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Completed",
		path: "/Dashboard_ServiceRequests_Completed",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
];

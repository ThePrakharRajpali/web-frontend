import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "My Profile",
    path: "/Dashboard/MyProfile",
    icon: <RiIcons.RiProfileLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Attendance",
    path: "/Dashboard/Attendance",
    icon: <FaIcons.FaRegCalendarAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Diesel",
    path: "/Dashboard/Diesel",
    icon: <FaIcons.FaHandHoldingUsd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Live Location",
    path: "/Dashboard/LiveLocation",
    icon: <FaIcons.FaMapMarkerAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Notification Form",
    path: "/Dashboard/Notification",
    icon: <FaIcons.FaWpforms />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "View Profile",
    path: "/Dashboard/Profile/Customer",
    icon: <AiIcons.AiOutlineTeam />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Customer",
        path: "/Dashboard/Profile/Customer",
        icon: <RiIcons.RiCustomerService2Fill />,
      },
      {
        title: "Delivery Boy",
        path: "/Dashboard/Profile/DeliveryBoy",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Driver",
        path: "/Dashboard/Profile/Driver",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Manager",
        path: "/Dashboard/Profile/Manager",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Vehicle",
        path: "/Dashboard/Profile/Vehicle",
        icon: <RiIcons.RiCaravanLine />,
      },
    ],
  },
  {
    title: "Registration",
    path: "/Dashboard/UserRegistration",
    icon: <AiIcons.AiOutlineUserAdd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "User",
        path: "/Dashboard/UserRegistration",
        icon: <AiIcons.AiOutlineUserAdd />,
      },
      {
        title: "Super User",
        path: "/Dashboard/SuperUserRegistration",
        icon: <RiIcons.RiAdminLine />,
      },
      {
        title: "Vehicle",
        path: "/Dashboard/VehicleRegistration",
        icon: <RiIcons.RiCaravanLine />,
      },
    ],
  },
  {
    title: "Service Requests",
    icon: <IoIcons.IoMdHelpCircle />,
    path: "/Dashboard/Requests/New",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Create New",
        path: "/Dashboard/Requests/New",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Pending",
        path: "/Dashboard/Requests/Pending",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Active",
        path: "/Dashboard/Requests/Active",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Completed",
        path: "/Dashboard/Requests/Completed",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Form Responses",
    icon: <IoIcons.IoMdHelpCircle />,
    path: "/Dashboard/Form/General",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Vendor",
        path: "/Dashboard/Form/Vendor",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "General",
        path: "/Dashboard/Form/General",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];

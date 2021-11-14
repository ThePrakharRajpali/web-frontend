import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/ServiceRequest/request.css";

import pencil from "../../../public/photos/pencil.svg";
import threedot from "../../../public/photos/threedot.svg";
import deleteIcon from "../../../public/photos/deleteIcon.svg";

const Header = ({ requestId }) => {
  return (
    <div className="header">
      <h1>
        <span>Service Request</span> &#47; {requestId}
      </h1>
    </div>
  );
};

const ServiceDetail = ({ requestId }) => {
  return (
    <div className="service-detail">
      <div className="service-detail-left">
        <p>Service ID: {requestId}</p>
        <p>Customer: Mr. Something</p>
        <p>Request Type: Recurring</p>
      </div>
      <div className="service-detail-right">
        <p>Status: Unappproved</p>
        <p>Start Date and Time: 27 / 10 / 2021 and 5:00 PM</p>
        <p>End Date and Time: 27 / 10 /2021 and 5:00 PM</p>
      </div>
    </div>
  );
};

const AssignManager = () => {
  return (
    <div className="assign-manager">
      Assigned Manager: Someone Generic
      <a href="#" className="add-manager">
        Add / Change
      </a>
    </div>
  );
};

const OrderTableHeader = () => {
  return (
    <ul className="order-table-header">
      <li>Driver Name</li>
      <li>Vehicle</li>
      <li>Delivery Boy</li>
      <li>Status</li>
      <li>Edit</li>
    </ul>
  );
};

const OrderTableRow = () => {
  return (
    <ul className="order-table-row">
      <li>Driver Someone</li>
      <li>MH88 WW1234</li>
      <li>Delivery Someone</li>
      <li>Undelivered</li>
      <li>
        <img src={pencil} alt="" />
        <img src={deleteIcon} alt="" />
        <img src={threedot} alt="" />
      </li>
    </ul>
  );
};

const OrderTable = () => {
  return (
    <div className="order-table">
      <OrderTableHeader />
      <div className="order-rows">
        <OrderTableRow />
        <OrderTableRow />
        <OrderTableRow />
        <OrderTableRow />
        <OrderTableRow />
        <OrderTableRow />
        <OrderTableRow />
      </div>
    </div>
  );
};

const OrderList = () => {
  return (
    <div className="order-list">
      <div className="order-list-heading">
        Orders:
        <a href="#" className="add-order">
          Add
        </a>
      </div>
      <OrderTable />
    </div>
  );
};

const OrderDetail = () => {
  return (
    <div className="order-details">
      <div className="order-details-header">Order Details:</div>
      <div className="order-details-content">
        <div className="order-details-left">
          <p>Id: 12345678ID</p>
          <p>Driver: Mr. Something Driver</p>
        </div>
        <div className="order-details-middle">
          <p>Vehicle: MH88 WW1234</p>
          <p>Delivery Boy: Mr. Something Delivery</p>
        </div>
        <div className="order-details-right">
          <p>Status: Dispatched</p>
        </div>
      </div>
    </div>
  );
};

const InvoiceList = () => {
  return <div className="invoice-list">Invoice List</div>;
};

export const Request = () => {
  const { id } = useParams();
  return (
    <div className="Dashboard">
      <Header requestId={id} />
      <div className="service-request">
        <ServiceDetail requestId={id} />
        <AssignManager />
        <OrderList />
        <OrderDetail />
        <InvoiceList />
      </div>
    </div>
  );
};

import React, { Fragment, useState } from "react";
import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/ServiceRequest/all.css";
import threedot from "../../../public/photos/threedot.svg";
import pencil from "../../../public/photos/pencil.svg";
import searchGlass from "../../../public/photos/searchGlass.svg";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <span>Service Request</span> &#47; All{" "}
      </h1>
    </div>
  );
};

const Row = () => {
  return (
    <Fragment>
      <ul className="table-row">
        {/* <li>{data.requestCode}</li>
        <li>{data.status}</li>
        <li>{data.customer}</li>
        <li>{data.startDate}</li>
        <li>{data.startTime}</li> */}
        <li>ID12345678</li>
        <li>Approved</li>
        <li>Customer</li>
        <li>24-10-2021</li>
        <li>5:00 PM</li>
        <li className="edit">
          <img src={pencil} alt="" />
          <img src={threedot} alt="" />
        </li>
      </ul>
    </Fragment>
  );
};

const List = ({ list }) => {
  return (
    <div className="table">
      <ul className="table-header">
        <li>Request ID</li>
        <li>Status</li>
        <li>Customer</li>
        <li>Date</li>
        <li>Time</li>
        <li>Edit</li>
      </ul>
      <div className="request-rows">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
};

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button className="search-button">
          <img src={searchGlass} alt="" />
        </button>
      </div>

      <List list={[]} />
    </div>
  );
};

const ServiceRequests_All = () => {
  return (
    <div className="Dashboard">
      <Header />
      <SearchBar />
    </div>
  );
};

export default ServiceRequests_All;

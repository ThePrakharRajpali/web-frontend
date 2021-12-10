import React, { useState } from "react";

import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/FormResponse/general.css";

import searchGlass from "../../../public/photos/searchGlass.svg";
const Header = () => {
  return (
    <div className="header">
      <h1>
        <span>Form Response</span> &#47; General
      </h1>
    </div>
  );
};

const Row = () => {
  return (
    <React.Fragment>
      <ul className="general-table-row">
        <li>ID12345678</li>
        <li>Some Name longer</li>
        <li>Some Email @ email.com</li>
        <li>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem
        </li>
      </ul>
    </React.Fragment>
  );
};

const List = ({ list }) => {
  return (
    <div className="table">
      <ul className="contact-table-header">
        <li>ID</li>
        <li>Name</li>
        <li>Email</li>
        <li>Message</li>
      </ul>
      <div className="contact-rows">
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

const Searchbar = () => {
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

export const General = () => {
  return (
    <div className="Dashboard General-response ">
      <Header />

      <Searchbar />
    </div>
  );
};

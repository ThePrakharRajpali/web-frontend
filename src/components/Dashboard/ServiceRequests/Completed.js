import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import "../../../public/css/Dashboard/Dashboard.css";
import "../../../public/css/Dashboard/ServiceRequest/all.css";
import threedot from "../../../public/photos/threedot.svg";
import pencil from "../../../public/photos/pencil.svg";
import searchGlass from "../../../public/photos/searchGlass.svg";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <span>Service Request</span> &#47; Completed{" "}
      </h1>
    </div>
  );
};

const Row = ({ data }) => {
  return (
    <Fragment>
      <ul className="table-service-request-row">
        <li>{data.requestCode}</li>
        <li>{data.status}</li>
        <li>{data.customer}</li>
        <li>{data.startDate}</li>
        <li>{data.startTime}</li>
        {/* <li>ID12345678</li>
        <li>Approved</li>
        <li>Customer</li>
        <li>24-10-2021</li>
        <li>5:00 PM</li> */}
        <li className="edit">
          <img src={pencil} alt="" />
          <img src={threedot} alt="" />
        </li>
      </ul>
    </Fragment>
  );
};

const List = ({ list }) => {
  // console.log(list);
  return (
    <div className="table-service-request">
      <ul className="table-service-request-header">
        <li>Request ID</li>
        <li>Status</li>
        <li>Customer</li>
        <li>Date</li>
        <li>Time</li>
        <li>Edit</li>
      </ul>
      <div className="request-service-request-rows">
        {list?.map((response, index) => {
          if (response.toShow) {
            return <Row key={index} data={response} />;
          }
        })}
      </div>
    </div>
  );
};

const SearchBar = ({ requests }) => {
  const [search, setSearch] = useState("");

  // const [list, setList] = useState(
  //   requests.data.data.map((request, index) => {
  //     return { ...request, toShow: true };
  //   })
  // );

  // console.log(list);
  // useEffect(() => {
  //   const copyList = list.map((request, index) => {
  //     // let show = request.requestCode.toString().contains(search);
  //     // let show1 = request.customer.toString().contains(search);
  //     return {
  //       ...request,
  //       toShow: false,
  //     };
  //   });
  //   setList(copyList);
  // }, [search]);

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

      <List
        list={requests?.data?.data?.map((request, index) => {
          return { ...request, toShow: true };
        })}
        search={search}
      />

      {/* <div className="table">
        <ul className="table-header">
          <li>Request ID</li>
          <li>Status</li>
          <li>Customer</li>
          <li>Date</li>
          <li>Time</li>
          <li>Edit</li>
        </ul>
        <div className="request-rows">
          {requests.data.data.map((response, index) => {
            if (response.toShow) {
              return <Row key={index} data={response} />;
            }
          })}
        </div>
      </div> */}
    </div>
  );
};

const ServiceRequestsCompleted = () => {
  const [requests, setRequests] = useState({});
  const [loading, setLoading] = useState(true);
  const data = "";
  const apiConfig = {
    method: "post",
    url: "https://www.naataconnection.com/api/serviceRequest/all/completed",
    headers: {},
    data: data,
  };
  const getData = (apiConfig) => {
    return axios(apiConfig)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setRequests(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData(apiConfig);
  }, []);

  return (
    <div className="Dashboard">
      <Header />
      {loading ? <div> Loading</div> : <SearchBar requests={requests} />}
    </div>
  );
};

export default ServiceRequestsCompleted;

import React from "react";
import { useParams } from "react-router-dom";

import "../../../public/css/Dashboard/FormResponse/generalSingle.css";

const Header = ({ requestId }) => {
  return (
    <div className="header">
      <h1>
        <span>Form</span> &#47; General &#47; {requestId}
      </h1>
    </div>
  );
};

const ResponseDetail = () => {
  return (
    <div className="response-detail">
      <p>Query ID: ID123456789</p>
      <p>Name: Some Name Longer</p>
      <p>
        Email: <a href="mailto:rprakhar@iitg.ac.in"> Some Email @ email.com</a>
      </p>
      <p>
        Response: <br />
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
      </p>
    </div>
  );
};

export const GeneralSingle = () => {
  const { id } = useParams();
  return (
    <div className="Dashboard">
      <Header requestId={id} />
      <div className="single-form-response">
        <ResponseDetail />
      </div>
    </div>
  );
};

import React from "react";
import { Form } from "./Form";
import { Reviews } from "./Reviews";
import { Client } from "../About/Client";
import { Content } from "./Content";
const Partner = () => {
  return (
    <React.Fragment>
      <Content />
      <Client />
      {/* <Reviews /> */}
      <Form />
    </React.Fragment>
  );
};

export default Partner;

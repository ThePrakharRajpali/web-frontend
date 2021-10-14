import React from "react";
import { Footer } from "./components/footer";
import Navbar from "./components/navbar";
import Form from "./components/Partner/Form";
import { Reviews } from "./components/Partner/Reviews";

const Partner = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Reviews />
      <Form />
      <Footer />
    </React.Fragment>
  );
};

export default Partner;

import React from "react";
import { Footer } from "./components/footer";
import Navbar from "./components/navbar";
import { Reviews } from "./components/Partner/Reviews";

const Partner = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Reviews />
      <Footer />
    </React.Fragment>
  );
};

export default Partner;

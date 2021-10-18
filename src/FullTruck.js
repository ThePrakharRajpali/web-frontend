import React from "react";
import { Footer } from "./components/footer";
import Navbar from "./components/navbar";
import Cards from "./components/Service/FullTruck/Cards";
import Content from "./components/Service/FullTruck/Content";

import "./index.css";

function ServicePage() {
  return (
    <div className="ServicePage">
      <Navbar className="Service" />
      <Content />
      <Cards />
      <Footer />
    </div>
  );
}

export default ServicePage;

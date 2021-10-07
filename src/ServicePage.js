import React from "react";
import { Footer } from "./components/footer";
import Navbar from "./components/navbar";
import ServiceCard from "./components/serviceCard";
import ServiceContent from "./components/serviceContent";

import "./index.css";

function ServicePage() {
  return (
    <div className="ServicePage">
      <Navbar />
      <ServiceContent />
      <ServiceCard />
      <Footer />
    </div>
  );
}

export default ServicePage;

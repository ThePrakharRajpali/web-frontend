import React from "react";
import { Footer } from "./components/footer";
import Navbar from "./components/navbar";
import { Cards } from "./components/Service/LastMile/Cards";
import { Content } from "./components/Service/LastMile/Content";

const LastMile = () => {
  return (
    <div className="ServicePage">
      <Content />
      <Cards />
    </div>
  );
};

export default LastMile;

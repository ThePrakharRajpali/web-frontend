import React, { Component } from "react";
import { Contact } from "./components/Home/contact";
import { Footer } from "./components/footer";
import { Gallery } from "./components/Home/gallery";
import Landing from "./components/Home/landing";
import Navbar from "./components/navbar";
import Services from "./components/Home/services";
import Stats from "./components/Home/stats";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Stats />
        <Services />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default Home;

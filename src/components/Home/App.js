import React, { Component } from "react";
import { Contact } from "./contact";
import { Gallery } from "./gallery";
import Landing from "./landing";
import Services from "./services";
import Stats from "./stats";

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

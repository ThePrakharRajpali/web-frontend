import React, { Component } from "react";
import { Contact } from "./contact";
import { Gallery } from "./gallery";
import Landing from "./landing";
import Services from "./services";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <div className="whitespace" style={{ height: "150px" }}></div>
        {/* <Stats /> */}
        <Services />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default Home;

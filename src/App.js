import React, { Component } from "react";
import "./App.css";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Stats from "./components/stats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Stats />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

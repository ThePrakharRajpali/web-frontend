import React from "react";

import "../index.css";
import "../public/css/landing.css";

import sample from "../public/videos/sample.mp4";
import preHeader from "../public/photos/preheader.svg";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="background">
        <video autoPlay muted loop id="video" src={sample} type="video/mp4">
          <source src={sample} type="video/mp4" />
        </video>
      </div>
      <section className="landing">
        <img src={preHeader} alt="" />
        <h1>
          <span className="header-orange">Lorem</span> <br />
          Ipsum
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga sit,
          porro quam culpa facilis architecto recusandae voluptatem qui ut
          natus, aperiam ullam soluta, aspernatur nulla adipisci ea. Deserunt,
          quasi eligendi.
        </p>
      </section>
    </React.Fragment>
  );
};

export default Landing;

import React from "react";

import Hero from "../../component/hero/hero.components";
import Testimony from "../../component/testimony/Testimony.component";
import Footer from "../../component/footer/Footer.components";

import "./homepage.styles.scss";

const Homepage = () => (
  <div className="">
    <Hero />
    <Testimony />
    <Footer />
  </div>
);

export default Homepage;

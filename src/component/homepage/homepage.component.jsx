import React from "react";
import "./homepage.styles.scss";
import Header from "../header/Header.component";
import Hero from "../hero/hero.components";
import Testimony from "../testimony/Testimony.component";

const Homepage = () => (
  <div className="">
    <Header />
    <Hero />
    <Testimony />
  </div>
);

export default Homepage;

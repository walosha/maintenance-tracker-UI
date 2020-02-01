import React from "react";

import Hero from "../../component/hero/hero.components";
import Testimony from "../../component/testimony/Testimony.component";

import "./homepage.styles.scss";

const testimonies = [
  {
    title: "This really made our life so easy !",
    loc: "Lagos, Nigeria",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing el Accusamus quos iste expedita illum, autem ipsum doloru obcaecati modi a amet atque eveniet consectetur ab corpovoluptate nobis exercitationem reiciendis? Voluptates!"
  },
  {
    title: "It saves us so much Time  !",
    loc: "Abuja, Nigeria",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing el Accusamus quos iste expedita illum, autem ipsum doloru obcaecati modi a amet atque eveniet consectetur ab corpovoluptate nobis exercitationem reiciendis? Voluptates!"
  },
  {
    title: "The best maintenance Tracketr so far",
    loc: "Porthacourt, Nigeria",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing el Accusamus quos iste expedita illum, autem ipsum doloru obcaecati modi a amet atque eveniet consectetur ab corpovoluptate nobis exercitationem reiciendis? Voluptates!"
  }
];

const Homepage = () => (
  <main>
    <Hero />
    <div className="testimony">
      <div className="testimony-header  u-mb-big">
        <h2 className="heading-secondary">
          Here is what our Customers have to say!
        </h2>
      </div>
      <div className="row">
        {testimonies.map(testimony => (
          <Testimony key={testimony.loc} {...testimony} />
        ))}
      </div>
    </div>
  </main>
);

export default Homepage;

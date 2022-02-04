import React from "react";

import Navbar from "components/Navbar/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Hero from "components/Header/Hero.js";
import Mission from "views/sections/Mission.js"
import Team from "views/sections/Team.js";
import Partners from "views/sections/Partners.js";
import Enqueries from "views/sections/Enqueries.js";

export default function About() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Hero
          title="Vision Behind Arda"
          btn="See our Partners"
          btn_color="success"
          desc="We are Futuristic team Ready to Produce Innovative Solutions"
          link="#"
        />
        <div className="main">

          <Mission />
          <Team />
          <Partners />
          <Enqueries />

        </div>
        <Footer />
      </div>
    </>
  );
}
